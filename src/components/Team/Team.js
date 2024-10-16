import './Team.css';
import Footer from "../Footer";
import teamMember1 from '../../assets/home/charles.jpg'; 
import teamMember2 from '../../assets/home/profile.jpeg'; 
import teamMember3 from '../../assets/home/aloice.jpg'; 
import teamMember4 from '../../assets/home/obeast.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    id: 1,
    name: 'Charles Makuka',
    role: 'Chief Executive Officer (CEO)',
    image: teamMember1,
    expertise: 'Leadership, Business Strategy, and Product Development.',
    bio: 'With over 4 years of experience in the food and engineering industries, I am the founder and CEO of MEBIUT Ltd, where I develop high-quality, locally inspired sauces like Kenyan Taste, leveraging my engineering background to optimize production processes while innovating and honoring Kenya’s culinary heritage.',
    socialLinks: {
      twitter: 'https://x.com/makuka_cha39019?t=oELMEi0gNBY3NU9vHt0abQ&s=09',
      linkedIn: 'https://www.linkedin.com/in/charles-makuka-8b2b62273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      facebook: 'https://www.facebook.com/charles.makuka.509?mibextid=ZbWKwL',
    },
  },
  {
    id: 2,
    name: 'Nelson Tommogo',
    role: 'Chief Technology Officer (CTO)',
    image: teamMember2,
    expertise: 'Software Development and Agile Methodologies, Systems Architecture and Cloud Computing, Cybersecurity and Data Privacy.',
    bio: 'As the CTO of MEBIUT, I drive technological innovation and process optimization to enhance product quality and efficiency while leading a multidisciplinary team to develop and implement strategies that align with the company’s goals.',
    socialLinks: {
      twitter: 'https://x.com/nelson_tommogo',
      linkedIn: 'https://www.linkedin.com/in/nelson-tommogo/',
      github: 'https://github.com/Nelson-Tommogo',
    },
  },
  {
    id: 3,
    name: 'Aloyce Otieno',
    role: 'Software Engineer',
    image: teamMember3,
    expertise: 'Web Development and Frontend Technologies, Backend Development and API Integration, Database Management and Data Analytics.',
    bio: 'As a software engineer at MEBIUT, I focus on developing innovative software solutions that streamline production processes and enhance product quality, collaborating with cross-functional teams to implement technology-driven strategies that align with our business objectives.',
    socialLinks: {
      twitter: 'https://x.com/_allois?t=dVdJ9hZbn8odB9coUd9kgQ&s=08',
      linkedIn: 'http://linkedin.com/in/aloyce-otieno',
      github: 'http://github.com/Allous-pun',
    },
  },
  {
    id: 4,
    name: 'Joshua Obondo',
    role: 'Chief Marketing Officer (CMO)',
    image: teamMember4,
    expertise: 'Marketing Strategy, Brand Management, and Communications.',
    bio: 'As the Chief Marketing Officer (CMO) at MEBIUT, I lead the development and execution of marketing strategies to promote our signature sauces, driving brand awareness and customer engagement while leveraging market insights to align our products with consumer preferences.',
    socialLinks: {
      twitter: 'https://x.com/Obondojoshua2?t=0QKzOM1VAT-sDAeuEjlh6A&s=09',
      linkedIn: 'https://www.linkedin.com/in/joshua-obondo-a27876241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/obondojoshuah/profilecard/?igsh=dm5zcHJqcWJubXFo',
    },
  },
];

const Team = () => {
  return (
    <>
      <div className="company-team-container">
        <header className="team-header">
          <h1>Meet Our Team</h1>
          <p>Our team of experienced professionals is dedicated to bringing our vision to life.</p>
        </header>

        {/* Team Member Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-expertise">{member.expertise}</p>
              <p className="team-bio">{member.bio}</p>
              <div className="social-links">
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {member.socialLinks.linkedIn && (
                  <a href={member.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
