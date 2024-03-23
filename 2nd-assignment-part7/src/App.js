import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  
  const chemist = people.filter(person => 
    person.profession === 'chemist'
    );

  const nonChemist = people.filter(person => 
    person.profession != 'chemist'
    );

  const chemistlistItems = chemist.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );

    const nonChemistlistItems = nonChemist.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
      );

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistlistItems}</ul>
      <h1>Non-Chemist Scientists</h1>
      <ul>{nonChemistlistItems}</ul>
    </article>
  );
}