using Microsoft.AspNetCore.Mvc;
using Tnewg.Repositories;
using Tnewg.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tnewg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly ICardRepository _cardRepository;

        public CardController(ICardRepository cardRepository)
        {
            _cardRepository = cardRepository;
        }


        // GET: api/<CardController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_cardRepository.GetAll());
        }

        // GET api/<CardController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CardController>
        [HttpPost]
        public void Post(Card card)
        {
            _cardRepository.Add(card);  
        }

        // PUT api/<CardController>/5
        [HttpPut("{id}")]
        public void Put(Card card, int id)
        {
            _cardRepository.Update(card, id);
        }

        // DELETE api/<CardController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _cardRepository.Delete(id);
        }
    }
}
