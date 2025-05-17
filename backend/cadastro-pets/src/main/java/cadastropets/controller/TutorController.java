package cadastropets.controller;

import cadastropets.model.Tutor;
import cadastropets.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tutores")
@CrossOrigin(origins = "*")
public class TutorController {

    @Autowired
    private TutorService tutorService;

    @PostMapping
    public Tutor cadastrarTutor(@RequestBody Tutor tutor) {
        return tutorService.salvar(tutor);
    }

    @GetMapping("/cpf/{cpf}")
    public Optional<Tutor> buscarPorCpf(@PathVariable String cpf) {
        return tutorService.buscarPorCpf(cpf);
    }
}
