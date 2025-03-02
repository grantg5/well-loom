package com.gadomski.well_loom.repository;

import org.springframework.stereotype.Repository;

import com.gadomski.well_loom.model.Area;

@Repository
public interface AreaRepository extends CRUDRepository<Area, Long> {
}
