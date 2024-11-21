package com.trabalhoOOL.crud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trabalhoOOL.crud.Modelo.Funcionario;
import com.trabalhoOOL.crud.Repository.FuncionarioRepository;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public List<Funcionario> getAllFuncionarios() {
        return funcionarioRepository.findAll();
    }

    public Optional<Funcionario> getFuncionarioById(Long id) {
        return funcionarioRepository.findById(id);
    }

    public Funcionario saveFuncionario(Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    public Funcionario updateFuncionario(Long id, Funcionario funcionarioDetails) throws Exception {
        Optional<Funcionario> existingFuncionario = funcionarioRepository.findById(id);
        if (existingFuncionario.isPresent()) {
            Funcionario updatedFuncionario = existingFuncionario.get();
            updatedFuncionario.setNome(funcionarioDetails.getNome());
            updatedFuncionario.setCargo(funcionarioDetails.getCargo());
            return funcionarioRepository.save(updatedFuncionario);
        } else {
            throw new Exception("Funcionario não encontrado.");
        }
    }

    public void deleteFuncionario(Long id) {
        funcionarioRepository.deleteById(id);
    }
}