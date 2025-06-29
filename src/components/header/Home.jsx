import Hero from "../Hero"

import Section from "../section/Section"

function Home(){


    return(<>
      
           <Hero title="Stories and interviews" des="Subscribe to learn about new product features, the latest in technology, solutions, and updates." btn ="Subscribe" />
           <Section title="All Blog Posts" items={[{im:'../public/assets/images/image (3).png',name:"Alec Whitten • 1 Jan 2023",title2:"Bill Walsh leadership lessons",des:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"},
  {im:"../public/assets/images/image (4).png",name:"Candice Wu • 1 Jan 2023",title2:"What is Wireframing?",des:"Introduction to Wireframing and its Principles. Learn from the best in the industry."},
  {im:"../public/assets/images/image (5).png",name:"Demi WIlkinson • 1 Jan 2023",title2:"PM mental models",des:"Mental models are simple expressions of complex processes or relationships."},
  {im:"../public/assets/images/image (6).png",name:"Natali Craig • 1 Jan 2023",title2:"How collaboration makes us better designers",des:"Collaboration can make our teams stronger, and our individual designs better."},
  {im:"../public/assets/images/image (7).png",name:"Drew Cano • 1 Jan 2023",title2:"Our top 10 Javascript frameworks to use",des:"JavaScript frameworks make development easy with extensive features and functionalities."},{
   im:"../public/assets/images/image (8).png", name:"Orlando Diggs • 1 Jan 2023",title2:"Podcast: Creating a better CX Community",des:"Starting a community doesn’t need to be complicated, but how do you get started?"
  }
]}/>
        </>)
}
export default Home
