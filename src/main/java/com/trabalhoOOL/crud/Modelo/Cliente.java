package com.trabalhoOOL.crud.Modelo;

import jakarta.persistence.Entity;

@Entity
public class Cliente extends Pessoa {
    
    private String telefone;
     
    // Getters e Setters
    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String tipoPessoa() {
        return "Cliente";
    }
}
