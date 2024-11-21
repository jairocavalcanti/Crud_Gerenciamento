package com.trabalhoOOL.crud.Modelo;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.PrePersist;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Pessoa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;

    @Column(nullable = false)
    private String tipo; 

    public abstract String tipoPessoa();

    // o campo "Pre persist será executado antes que a entidade seja salva no banco de dados"
    @PrePersist
    public void preencherTipo() {
        this.tipo = tipoPessoa(); // Preenche o campo "tipo" antes de salvar
    }

    // Getters e Setters
    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
}
