"use client";

import { countries } from "@/app/(home)/_components/country-cards";
import { usePathname } from "next/navigation";

const otherCountries = [
  {
    label: "Ireland",
    code: "ireland",
    desc: `Ireland, which stands out with its history, ancient ruins and impressive landscapes, is the ideal country for those who want to have a different educational experience and observe a new culture firsthand. Ireland, whose native language is English, not only has the capacity to meet all your educational needs, but also attracts students from every continent, especially with the popularity of its language schools. We invite those who want to receive university, master's and high school education in Ireland, which has well-known cities such as Dublin, Belfast and Cork, to the CONNECT family!`,
  },
  {
    label: "Malta",
    code: "malta",
    desc: `Located in the Mediterranean, in the south of Italy, and attracting the attention of students as well as tourists with its warm climate throughout the year, Malta manages to please all its visitors with its wonderful beaches and historical texture. English is one of the main languages ​​spoken in this small and beautiful country, which is one of the densest historical sites in the world according to UNESCO and even inspired the famous ancient writer Homer. If you want to relax and have a holiday while studying English, you should choose Malta, which attracts students in every season with its abundance of language schools. As the CONNECT family, we are with you to help you have this unforgettable experience!`,
  },
  {
    label: "Spain",
    code: "spain",
    desc: `Would you like to share the same language with 400 million people, travel in 21 countries without any language problems and say that I also know the 2nd most spoken language in the world? Then Spanish, which shapes the world economy and culture, will be the most suitable language for you. It is worth remembering that Spanish, which is closely related to French and Italian and is a language that you will enjoy learning with its phonetic beauty and rich vocabulary, is also one of the official languages ​​of the United Nations. Spanish, which is estimated to be the language of half of the citizens of the United States in 50 years and is one of the fastest growing languages ​​on the internet with 256.8 million users in just 5 years, promises hope for the future as well as its rich history.

    If you want to learn Spanish in Spain and study at a university in Spain, we are waiting for you at CONNECT!`,
  },
  {
    label: "Denmark",
    code: "denmark",
    desc: `Denmark is located in northern Europe and is part of Scandinavia. Denmark is one of the must-see countries of idyllic villages and pristine woodlands and lakes.

    Denmark is considered one of the best education systems in the world and is an excellent option for studying abroad with its social life, educational approach and level of civilization.
    
    One of the most important elements for Denmark is that it has excellent opportunities for students in Northern Europe and the surrounding areas. In addition to the quality of education at Danish universities, there are also many job opportunities for international students due to the high level of welfare throughout the country and the need for production. It offers a high quality of life and employment opportunities for students studying at Danish universities.
    
    Undergraduate education in Denmark is 3 years long and the language of instruction is English.
    
    The most prominent universities among Danish universities are Aarhus, Aalborg and Copenhagen Universities. The best university for hosting international students is Aarhus.
    
    Many of the universities in Denmark provide high standards of education, are ranked high in the best university rankings abroad, and have YÖK equivalence and validity in Turkey, thanks to their curriculum compatibility.  
    
    If you want to study at university or master's degree in Denmark, you can call CONNECT.`,
  },
  {
    label: "Finland",
    code: "finland",
    desc: `Finland, one of the most livable settlements in the world and a Northern European country located on the Baltic Sea, has historical buildings, squares, city parks, museums and wonderful natural beauties.

    In Finland, which always surprises its visitors with its magnificent nature, forests and lakes that complement a lush green landscape, the sun does not set for 73 days in summer and does not rise for 51 days in winter.
    
    The languages ​​of university education in Finland are mainly Finnish and Swedish.
    
    High-quality universities and many English program options await students who choose Finland, one of the developed countries of Europe, for education.
    
    When it comes to education system, Finland is one of the first places that come to mind. There are many advantages of doing a master's degree in Finland, one of the pioneers of education.
    
    If you want to study at university or master's degree in Finland, CONNECT will be with you.`,
  },
  {
    label: "Sweden",
    code: "sweden",
    desc: `Stockholm is one of the most developed cities in Scandinavia and is always at the top of the list of the most livable cities.

    Located on the Scandinavian peninsula, Sweden attracts everyone's attention with its unique architectural structures, lush forests, and peaceful and calm atmosphere.
   
   In addition to the quality of education in higher education, Sweden is an innovative country, offers English education programs, social equality, universities' connections with the professional business world, safe and modern environment, economic living conditions, being a member of the European Union since 1995 and being among the world's top ranked U21 rankings. Being shown as the 5th best higher education system is the biggest reason for preference.
   
   Sweden, which is preferred by international students every year, is also among the top 10 countries with the best healthcare system in the world. In Sweden, undergraduate programs last 3 years, while master's degree programs vary between 1 and 2 years.
   
   Since Swedish Universities have achieved good places in world lists, many of them have YÖK Equivalence.
   
   If you are considering university education or master's degree in Sweden, you can call CONNECT.`,
  },
  {
    label: "Hungary",
    code: "hungary",
    desc: `Hungary, a landlocked country in Central Europe, hosts many visitors every year with its historical and natural beauties. Many buildings and regions in the country are protected by UNESCO. These structures and the capital Budapest play an important role in making it one of the most popular tourist countries in the world. Its historical buildings, which must be seen in terms of architecture, and its streets integrated with art, can be considered among the symbols of Hungary.

    A Hungarian university in Hungary is unthinkable without foreign students.
    
    We can apply to Hungarian Universities with your high school diploma without needing YKS or TYT exam results. Since your education language will be English, you can easily apply.
    
    You will be able to study at the top 1000 universities in the world.
    
    Additionally, 99% of Hungarian Universities have YÖK recognition.
    
    If you want to receive a university education in Hungary at affordable prices, you can call CONNECT.`,
  },
  {
    label: "Russia",
    code: "russia",
    desc: `Russia is a unique country with year-round snow-covered mountains, deep lakes, icy tundra and huge parks; It attracts attention with its colorful nightlife, extraordinary festivals, entertaining events and modern city life. Russia, which is the largest country in the world in terms of area, is also a country with eye-catching historical structures and traditions.

    Russia   has been one of the most preferred countries for university education in recent years. Russia is one of the countries with leading political and economic power.
    
    In Russia, 99.6% of the population is literate and Russia has raised many writers and artists to the world. He trained many scientists who were awarded the Nobel Prize.  
    
    The social facilities of Russian universities and the international image of the schools are quite good. Higher education in Russia  has gained great importance especially after the Cold War. Education and foreign students are given great importance in Russia , which sees international education and foreign students as a gateway to foreign expansion   .
    
    Russian Universities are preferred because they are economical.
    
    Russian universities are recognized by YÖK and   there are universities that are among the top 1000 in the ranking of world universities with direct YÖK Equivalence of Russian Universities .
    
    The language of university education in Russia  is Russian. To start  undergraduate education in Russia    , the Russian proficiency certificate obtained after the Russian preparatory education , high school diploma and high school transcript are taken into consideration.
    
    If you want to study at a university in Russia, you can call CONNECT.`,
  },
  {
    label: "Poland",
    code: "poland",
    desc: `Warsaw, the capital city on the UNESCO World Heritage List,   is the most important city where you can discover Poland's rich culture and heritage. In addition to being the cultural capital of the country, Krakow  also hosts Europe's largest market square with its churches and monuments in the historical city center, which is a UNESCO World Heritage Site. Wrocław , known as Breslau with its great history and lively historical center,  is famous for its bridges.

    With university education in Poland, there is always the most suitable education service for everyone who wants to study abroad, according to their abilities, preferences, career goals and budget. University education in Poland is a very good choice and opportunity for those who want to continue their education abroad at European standards.
    
    With its disciplined and high-quality university education, Poland is a European country that has proven itself internationally.
    
    Although Poland is a European Union country, it is a very economical country in terms of living expenses. Accommodation, transportation and school costs in Poland are very affordable.
    
    You can apply to study at a university in Poland with only a high school diploma, without the YKS and TYT exams. However, for equivalence in Turkey, you need to take YKS and TYT. It is also an advantage that the language of education is English and the undergraduate education is 3 years.
    
    University students with horizontal transfer plans and students studying for an associate degree can also apply to universities for university education in Poland to complete their bachelor's degree.

    If you are considering university education in Poland, you can call CONNECT.`,
  },
];

const mainCountries = countries.map(({ label, code, desc }) => ({ label, code, desc }));

export const allCountries = [...mainCountries, ...otherCountries];

export default function countryPage() {
  const pathname = usePathname();

  const currentCountry = pathname.split("/").pop();

  const country = allCountries.find((country) => country.code === currentCountry);

  return (
    <div className="p-5 px-7 md:p-14">
      <h1 className="pb-2 md:py-8 text-xl md:text-4xl font-semibold">{country!.label.toUpperCase()}</h1>
      <p className="md:text-lg text-zinc-500"> {country!.desc} </p>
    </div>
  );
}
