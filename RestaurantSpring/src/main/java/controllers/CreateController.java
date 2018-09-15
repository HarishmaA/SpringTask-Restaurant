package controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

import model.Receipe;

@RestController
public class CreateController {
	@PostMapping(value = "/create", produces = "application/json")
	public ResponseEntity<Receipe> create(@RequestParam Long receipeId, @RequestParam String receipeName) {
		Key receipeKey = KeyFactory.createKey("Receipe", receipeId);
		Entity receipe = new Entity("Receipe", receipeId);
		receipe.setProperty("receipeId", receipeId);
		receipe.setProperty("receipeName", receipeName);
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		datastore.put(receipe);
		Entity result = null;
		try {
			result = datastore.get(receipeKey);
		} catch (EntityNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		Receipe receipeDetails = new Receipe((Long) result.getProperty("receipeId"),
				(String) result.getProperty("receipeName"));
	
		return new ResponseEntity<Receipe>(receipeDetails, HttpStatus.OK);
    }
    

//	@GetMapping("/")
//	public String home() {
//		return "home";
//	}

}

// @GetMapping("/")
// public ModelAndView home1()
// {
// ModelAndView modelAndView = new ModelAndView("home");
// return modelAndView;
// }
