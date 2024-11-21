package com.trabalhoOOL.crud.Modelo;

import jakarta.persistence.Entity;

@Entity
public class Funcionario extends Pessoa {
    
    private String cargo;
    
    // Getters e Setters
    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public String tipoPessoa() {
        return "Funcionario";
    }
}
