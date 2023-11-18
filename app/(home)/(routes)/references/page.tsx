import { ReferenceCard } from "./_components/reference-card";

const reviews = [
  {
    src: "/references/student1.jpg",
    name: "Berke Rıfat Yeşiltepe",
    review: `My dream has always been to study in Canada. However, it seemed difficult to achieve this dream. Until I saw Connect Overseas Education Consultancy.

    My teacher Aynur helped me so much day and night that she helped me realize this dream easily. I graduated from Yeditepe University Biomedical Engineering department. I am currently pursuing an MBA at University Canada West in Vancouver. I would like to thank Connect Overseas Education Consultancy, especially my teacher Aynur. I am also very grateful to Aynur. You can choose Connect with peace of mind.`,
  },
  {
    src: "/references/student2.jpg",
    name: "Ceylin Derici",
    review: `Our paths crossed with dear Ms. Aynur at a very uncertain and stressful time when I did not know what to do after YKS. After the exam, when I thought all my efforts were in vain, new doors opened for me thanks to Connect.

    I have been living in Warsaw, the capital of Poland, one of the most popular cities in Europe, for 3 months and my life has changed greatly. There are big forests in the city, there are many beautiful places to visit, I can take the train and go to Berlin in 6 hours without going through any passport control. I can travel to European countries very easily... Living here has many advantages that I cannot count. Living with European civilization and order is completely different. I learn the language in a way that I can use it both in daily life and at an academic level, without the lesson system being regular and memorizing. I am very happy that I had the chance to practice this with the friends I made from all over the world.
    
    While life was closing doors for me, you opened other doors for me, the doors of Europe... I thank you for being with me and supporting me throughout this process.`,
  },
];

export default function References() {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReferenceCard src={review.src} name={review.name} review={review.review} key={index} />
      ))}
    </div>
  );
}
