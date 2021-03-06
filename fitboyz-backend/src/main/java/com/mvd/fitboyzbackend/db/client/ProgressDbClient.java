package com.mvd.fitboyzbackend.db.client;

import com.mvd.fitboyzbackend.db.model.*;
import com.mvd.fitboyzbackend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProgressDbClient {
    private final ProgressDbRepository progressDbRepository;

    public Progress saveRecord(Progress progress){
        return progressDbRepository.save(progress);
    }
    public List<Progress> getProgresses(String name, Long id){
        return progressDbRepository.findByNameEqualsAndUser_IdEqualsOrderByDateAsc(name, id);
    }
    public List<Progress> getAllProgresses(Long id){
        return progressDbRepository.findByUser_IdEquals(id);
    }
}
