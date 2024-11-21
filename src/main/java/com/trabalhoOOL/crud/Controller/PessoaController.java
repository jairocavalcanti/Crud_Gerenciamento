package com.trabalhoOOL.crud.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trabalhoOOL.crud.Modelo.Pessoa;
import com.trabalhoOOL.crud.Service.PessoaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public List<Pessoa> getAllPessoas() {
        return pessoaService.getAllPessoas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pessoa> getPessoaById(@PathVariable Long id) {
        Optional<Pessoa> pessoa = pessoaService.getPessoaById(id);
        return pessoa.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/postpessoas")
    public ResponseEntity<Pessoa> createPessoa(@Valid @RequestBody Pessoa pessoa) {
        Pessoa savedPessoa = pessoaService.savePessoa(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPessoa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pessoa> updatePessoa(@PathVariable Long id, @Valid @RequestBody Pessoa pessoaDetails) {
        try {
            Pessoa updatedPessoa = pessoaService.updatePessoa(id, pessoaDetails);
            return ResponseEntity.ok(updatedPessoa);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/pessoas")
    public List<Pessoa> getAllPessoasyt() {
        List<Pessoa> pessoas = pessoaService.getAllPessoas();
        pessoas.forEach(pessoa -> {
            System.out.println("Tipo de pessoa: " + pessoa.tipoPessoa()); // Usando polimorfismo
        });
        return pessoas;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePessoa(@PathVariable Long id) {
        pessoaService.deletePessoa(id);
        return ResponseEntity.noContent().build();
    }
}
