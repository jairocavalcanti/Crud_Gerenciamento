package com.trabalhoOOL.crud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trabalhoOOL.crud.Modelo.Cliente;
import com.trabalhoOOL.crud.Modelo.Funcionario;
import com.trabalhoOOL.crud.Modelo.Pessoa;
import com.trabalhoOOL.crud.Repository.PessoaRepository;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> getAllPessoas() {
        return pessoaRepository.findAll();
    }

    public Optional<Pessoa> getPessoaById(Long id) {
        return pessoaRepository.findById(id);
    }

    public Pessoa savePessoa(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public void deletePessoa(Long id) {
        pessoaRepository.deleteById(id);
    }

    public Pessoa updatePessoa(Long id, Pessoa pessoaDetails) throws Exception {
        Pessoa pessoa = pessoaRepository.findById(id)
                .orElseThrow(() -> new Exception("Pessoa não encontrada"));

        pessoa.setNome(pessoaDetails.getNome());
        if (pessoa instanceof Funcionario && pessoaDetails instanceof Funcionario) {
            ((Funcionario) pessoa).setCargo(((Funcionario) pessoaDetails).getCargo());
        } else if (pessoa instanceof Cliente && pessoaDetails instanceof Cliente) {
            ((Cliente) pessoa).setTelefone(((Cliente) pessoaDetails).getTelefone());
        }

        return pessoaRepository.save(pessoa);
    }
}
