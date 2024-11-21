package com.trabalhoOOL.crud.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trabalhoOOL.crud.Modelo.Cliente;
import com.trabalhoOOL.crud.Repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> getClienteById(Long id) {
        return clienteRepository.findById(id);
    }

    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente updateCliente(Long id, Cliente clienteDetails) throws Exception {
        Optional<Cliente> existingCliente = clienteRepository.findById(id);
        if (existingCliente.isPresent()) {
            Cliente updatedCliente = existingCliente.get();
            updatedCliente.setNome(clienteDetails.getNome());
            updatedCliente.setTelefone(clienteDetails.getTelefone());
            return clienteRepository.save(updatedCliente);
        } else {
            throw new Exception("Cliente não encontrado.");
        }
    }

    public void deleteCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}