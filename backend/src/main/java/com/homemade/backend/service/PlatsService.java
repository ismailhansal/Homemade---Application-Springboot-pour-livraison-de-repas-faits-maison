package com.homemade.backend.service;

import com.homemade.backend.dto.PlatsDto;
import com.homemade.backend.entite.CookProfile;
import com.homemade.backend.entite.Plats;

import java.security.Principal;
import java.util.List;

public interface PlatsService {
    List<PlatsDto> getAllPlatsDto(int page, int size);
    PlatsDto createPlat(PlatsDto p, Principal principal);
    PlatsDto modifierPlat(PlatsDto p, Long id) ;
    PlatsDto getPlatDtoById(Long id);
    void supprimerPlat(Long id);
    CookProfile getCookProfileByUsername(String username);



}
