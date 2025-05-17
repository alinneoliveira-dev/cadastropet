package cadastropets.service;

import cadastropets.model.Pet;
import cadastropets.model.Tutor;
import cadastropets.repository.PetRepository;
import cadastropets.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private TutorRepository tutorRepository;

    public Pet salvar(Pet pet, Long tutorId) {
        Tutor tutor = tutorRepository.findById(tutorId)
                .orElseThrow(() -> new RuntimeException("Tutor não encontrado com ID: " + tutorId));
        pet.setTutor(tutor);
        return petRepository.save(pet);
    }
}
