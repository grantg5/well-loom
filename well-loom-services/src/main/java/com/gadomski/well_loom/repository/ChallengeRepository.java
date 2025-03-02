package com.gadomski.well_loom.repository;

import com.gadomski.well_loom.model.Challenge;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends CRUDRepository<Challenge, Long> {
}
