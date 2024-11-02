export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {/* <p className="Person__age">{person.age > 0 ? `I am ${person.age}` : ''}</p> */}
    {person.age > 0 ? <p className="Person__age">I am {person.age}</p> : ''}
    <p className="Person__partner">
      {person.isMarried === true
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </section>
);
