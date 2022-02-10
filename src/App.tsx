import { List } from './components/List';

const data = [
  {
    id: 1,
    question: 'Do I have to allow the use of cookes?',
    answer:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    question: 'How do I change my My Page password?',
    answer:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    question: 'What is BankID?',
    answer:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    question: 'Whose birth number can I use?',
    answer:
      'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    question: 'When do I recieve a password ordered by letter?',
    answer:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan',
  },
];

function App() {
  return (
    <div className='w-[90vw] max-w-[920px] my-[5rem] mx-auto bg-white rounded py-[2.5rem] px-[2rem]'>
      <h3 className='capitalize text-bold text-3xl mb-6'>
        questions and answers about login
      </h3>
      <section>
        {data.map((el) => (
          <List key={el.id} question={el.question} answer={el.answer} />
        ))}
      </section>
    </div>
  );
}

export default App;
