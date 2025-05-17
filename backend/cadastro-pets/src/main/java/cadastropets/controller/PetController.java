package cadastropets.controller;

import cadastropets.model.Pet;
import cadastropets.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "*")
public class PetController {

    @Autowired
    private PetService petService;

    @PostMapping("/{tutorId}")
    public Pet cadastrarPet(@RequestBody Pet pet, @PathVariable Long tutorId) {
        return petService.salvar(pet, tutorId);
    }
}
