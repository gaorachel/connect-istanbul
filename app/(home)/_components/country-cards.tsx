import { ImageCard } from "./image-card";

export const countries = [
  {
    label: "France",
    code: "france",
    type: "location",
    desc: `Wouldn't you like to learn French by experience? You will master French culture while improving your language skills in France, which extends from the deep blue seas of the Côte d'Azur region to the magnificent views of the Alps! Did you know that France, which will appeal to your mind with its world-famous writers, musicians and thinkers, as well as being one of the most tourist-attracting countries in Europe, is the country that has received the most Nobel Prizes in Literature so far?

    For those who prefer to do different activities while learning a language, let us remind you that French gastronomy was included in the UNESCO World Heritage List in 2010.
    
    Learn French, one of the official languages ​​of the European Union and the United Nations, spoken by 115 million Francophone people and protected with great care since 1653, in the city of your choice.
    
     If you want to study language or university in France, CONNECT will always be with you.`,
  },
  {
    label: "England",
    code: "england",
    type: "location",
    tag: "popular",
    desc: `
    England, the most preferred country by students, offers you all levels and types of education in the best conditions! The education you receive in this country, which attracts people of all ages, especially with its language schools and summer camps in many cities such as London, Cambridge, Oxford, Canterbury and Bournemouth, will not only improve your English level, but also prepare you for your academic and professional experiences for the rest of your life.

England is one of the best countries for university education. The fact that undergraduate education is 3 years and master's education is 1 year increases the demand for England.

The preparatory education offered before both undergraduate and master's education provides students with ease of admission to universities.

Additionally, England is the best address for high school education. Especially students who receive A level high school education in boarding schools have the chance to attend schools such as Oxford University or Cambridge University, which are among the top rankings in the world.

It is also preferred for international students who have completed their undergraduate or graduate education in the UK to obtain a 2-year work visa.

 If you want to get support on undergraduate, graduate, high school education or language education, CONNECT will always be with you.
    `,
  },
  {
    label: "Scotland",
    code: "scotland",
    type: "location",
    desc: `With its 790 islands, endless green valleys and dazzling lakes, Scotland is ideal for those who want to integrate with nature and meet a unique world while learning English! This region, which is also the homeland of golf, offers visitors the opportunity to experience Scottish culture with its festivals as well as nature and sports. Scotland, home to Edinburgh, which was awarded the title of "City of Literature" by UNESCO in 2004, is the country of well-known writers such as Robert Burns, Lord Byron and JK Rowling. We also owe mechanical television systems and the telephone to the Scots. If you want to learn English and have an unforgettable experience in Scotland, which is full of surprises, the right address is CONNECT!`,
  },
  {
    label: "Italy",
    code: "italy",
    type: "location",
    desc: `We invite you to the center of art, architecture and music to learn Italian! While learning the language in Italy, you can visit various museums to master their culture, taste the world-famous Italian cuisine or enjoy the colorful streets. Italy, which attracts more than 50 million tourists a year, is also home to La Sapienza, the largest university in Europe. The number of native speakers of Italian, which is the 4th most learned language in the world, reaches 65 million.

    In Italy, you have the chance to study English at both public and private universities. Italy is especially preferred by international students because the annual tuition fees of public universities are very low.
    
    If you want to learn Italian, known as the language of art and culture, or receive university education or master's education, we invite you to CONNECT.`,
  },
  {
    label: "The Netherland",
    code: "netherland",
    type: "location",
    desc: ``,
  },
  {
    label: "Germany",
    code: "germany",
    type: "location",
    desc: `By learning the native language of famous figures who shaped science, literature, music and philosophy such as Goethe, Marx, Nietzsche, Freud, Kant and Wagner, you can receive quality education at free universities, have the opportunity to be an employee of many international companies that are leaders in technology, and have the opportunity to become an employee of many international companies with a population of 81 million. Would you like to have the chance to improve your academic and professional life in Germany, which has the first largest economy in Europe and the 4th largest economy in the world? Germany, the world's second largest exporter, also attracts attention with its natural and historical beauty, as it hosts 2100 castles and one third of it is covered with forests. German, which is from the same language family as English, has a very knowledgeable and cultured speaker base, with 94,000 new books published every year.

    In Germany, you have the chance to complete your university education by studying German at state universities and English at private universities.
    
    It is also among the most demanded countries because public universities are very economical.
    
    If you want to study university or language education in Germany, choose CONNECT!`,
  },
  {
    label: "United States",
    code: "united-states",
    type: "location",
    desc: `The USA, which borders Canada and Mexico, is one of the most preferred countries by students from various parts of the world who want to study in English. This is because everyone can find their niche in the culture, economic life and climate that vary from state to state. You can choose the type of education and school that suits your needs and have the chance to find an internship or a job in America's world-famous companies.

    As the CONNECT family, we are with you in the process of choosing the right school for university, master's, high school education, language school and certificate programs!`,
  },
  {
    label: "Canada",
    code: "canada",
    type: "location",
    tag: "popular",
    desc: `Located in North America and known for its major cities such as Toronto, Vancouver, Montreal and Ottawa, Canada is home to 36 million people. Known for its nature, safety and kindness of its people, this country has the most educated population in the world, with more than half of its people having university degrees, according to Time Magazine.

    Providing international students with a 3-year work visa after graduation also makes Canada preferred.
    
    Canada, which also has the longest coastline in the world, has two official languages: English and French. You can complete your language course, summer school, undergraduate or graduate education in the language of your choice and make a difference in your academic development. As the CONNECT family, we are here for you for training that suits your wishes.`,
  },
];

export const CountryCards = () => {
  return (
    <div>
      <p className="p-5 md:p-20 text-3xl text-center font-bold"> Education in many countries </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-24 p-10 gap-10 rounded-lg lg:w-[1400px] md:w-[800p] m-auto">
        {countries.map((country) => (
          <ImageCard {...country} key={country.code} slug="countries" />
        ))}
      </div>
    </div>
  );
};
