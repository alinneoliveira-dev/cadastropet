package cadastropets.service;

import cadastropets.model.Tutor;
import cadastropets.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TutorService {

    @Autowired
    private TutorRepository tutorRepository;

    public Tutor salvar(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    public Optional<Tutor> buscarPorCpf(String cpf) {
        return tutorRepository.findByCpf(cpf);
    }
}
