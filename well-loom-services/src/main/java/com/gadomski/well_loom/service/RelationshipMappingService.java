package com.gadomski.well_loom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadomski.well_loom.repository.RelationshipMappingRepository;

@Service
public class RelationshipMappingService<T> {
    private final RelationshipMappingRepository<T, Long> repo;

    @Autowired
    public RelationshipMappingService(RelationshipMappingRepository<T, Long> repo) {
        this.repo = repo;
    }

    public List<T> getRelatedEntities(String entity1, String entity2, int entity1Id, int entity2Id) {
        // Create new utility class to convert entities into mapping entity, returning mapping fields
        // Call that, then call the repo
    }
}