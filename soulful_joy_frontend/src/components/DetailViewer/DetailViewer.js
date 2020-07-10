import React from 'react';
// import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthContext from '../../context/auth-context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faAdobe } from '@fortawesome/free-solid-svg-icons';
import location_1 from '../../assets/imgs/location_1.jpg';
import location_2 from '../../assets/imgs/location_2.jpg';
import location_3 from '../../assets/imgs/location_3.jpg';
import location_4 from '../../assets/imgs/location_4.jpg';
import location_5 from '../../assets/imgs/location_5.jpg';
import location_6 from '../../assets/imgs/location_6.jpg';

import team_1 from '../../assets/imgs/team_1_kwayera.jpeg';
import team_2 from '../../assets/imgs/team_2_ade.jpg';
import team_3 from '../../assets/imgs/team_3_khadijah.jpg';
import team_4 from '../../assets/imgs/team_4_kwasausya.jpg';
import team_5 from '../../assets/imgs/team_5_perdella.jpg';

import './DetailViewer.css';
// import SplashMainLogo from '../../assets/imgs/logo_splash_pg.png';


const detailViewer = props => (
  <AuthContext.Consumer>
    {context => {
      // console.log('detailViewer', props);
      return (
        <div className="detailViewer_blackTop">
          <div className="detailViewContainer">
            <Row className="detailViewer_topRow">
              <Col className="detailViewer_topCol">
                <Row className="detailViewer_subRow">
                  <h1 className="detailViewer_topHeading">
                    {props.data.page}
                  </h1>
                </Row>
                <Row className="detailViewer_subRow xRow">

                  {props.data.page === 'team' &&
                    props.data.data === 'team_1_kwayera' && (
                      <Row className="detail_content_row">
                        <Image src={team_1} className="detailViewer_Img detailStaffImg" fluid/>
                        <p className="detailViewer_text">
                          Name: D. Kweyera Archer
                        </p>
                        <p className="detailViewer_text">
                          Role: Tranformational Leadership Coach
                        </p>
                        <p className="detailViewer_text">
                          Bio:
                          The beginnings of what piqued my cultural curiosity was a combination of frequent international travels with my parents as well as being raised in both Jamaica, WI and NYC, USA.  Developing a respect and deep passion for understanding and working in partnership with communities to reach to their desired outcomes, became my quest.
                          Rooted in real life business experience on the front line first as a professional modern and ballet dancer where I toured the world as a performer, as well as providing lectures and arts residencies, and then, becoming the founder and CEO of the award-winning NYC based Ifetayo Cultural Arts Academy, Inc, I was able to collaborate with the Brooklyn community for over 25 years to build Ifetayo from a minute budget to a multi-million dollar institution.
                          I now travel throughout the Caribbean, Africa, and America sharing insights on philanthropy, social responsibility, cultural intelligence, organizational transformation, mindful leadership, and community  engagement.
                          As a keynote speaker and strategist, I’ve shared my thoughts and approaches with many international media sources. My practical experiences, recognized case studies, and passion have proven to be a winning formula for individual clients as well as conference attendees from coast to coast.
                          In 2014 my work caught the attention of the Obama’s and I received an award at the White House for designing and running one of the best arts and humanities programs in the nation.
                          As a New Yorker, I have served as a multi-year appointed panelist for the New York State Council on the Arts, a regular panelist for the NYC Department of Cultural Affairs, and representing the USA as a trustee of the National Guild for Community Arts Education working to coach and train administrators in improving their leadership, and management. And, as an international citizen, I am honored to continue serving on boards globally.
                          My proven track record in designing and delivering initiatives that are sustainable and inclusive of the community’s voice has become the basis for some of my most requested organizational consultancies to the benefit of both leaders and the communities in which they serve.
                          In addition to focusing on my international consulting firm Global Ase, today I share my work globally as a visiting professor at multiple universities, a member on corporate boards, as well as an adviser to philanthropic entities, social venture firms, and non-profit organizations and their leaders on best practices for creating, transforming, leading and sustaining their organizations.
                          I hold a Master of Science in Community Economic Development with a focus in Community Organizing and a Master of Arts in Non-Profit Management from Southern New Hampshire University.  I am also an alumna of Columbia Business School’s Executive-Level Graduate Training program with the Institute for Non-Profit Management and hold many field related certificates and honors.  I am also a proud mother of three beautiful adult children.
                        </p>
                      </Row>
                  )}
                  {props.data.page === 'team' &&
                    props.data.data === 'team_3_khadijah' && (
                      <Row className="detail_content_row">
                      <Image src={team_3} className="detailViewer_Img detailStaffImg" fluid/>
                      <p className="detailViewer_text">
                        Name: Khadija A. Tudor (LMT)
                      </p>
                      <p className="detailViewer_text">
                        Role:
                      </p>
                      <p className="detailViewer_text">
                        Bio:
                        A graduate of the Swedish Institute Health and Science College in NYC,  Khadija practices Therapeutic massage through an approach that focuses on relaxation as a tool for easing pain. Khadija noticed that her female clients shared similar concerns: body issues, safety concerns, stress and anxiety, self connectedness and the list goes on. No matter their career or relative wealth, each client had various needs. Acknowledging these needs, Khadija and Ade designed Life Wellness Center to offer their clients a safe place to relax, build on and begin again.
                        Khadija's belief is that an empowered life is one that can be lived with the familiarity of touch. This belief guides her practice. She brings an intuitive caring demeanor into every session, a place of trust and calm. Her professional experience range from spas to medical offices and a growing clientele of people recovering from injuries, and chronic physical and emotional pain.
                      </p>
                      </Row>
                  )}
                  {props.data.page === 'team' &&
                    props.data.data === 'team_2_ade' && (
                      <Row className="detail_content_row">
                      <Image src={team_2} className="detailViewer_Img detailStaffImg" fluid/>
                      <p className="detailViewer_text">
                        Name: Ade Collman (LAC. & LMT)
                      </p>
                      <p className="detailViewer_text">
                        Role:
                      </p>
                      <p className="detailViewer_text">
                        Bio:
                        A graduate of the Swedish Institute Health and Science College in NYC, Ade started his journey in the direction of therapeutic massage while working at an herb shop in the west village of New York City.  Although, at a young age Ade discovered his love for healing and wellness from his grandmother.
                        A seasoned Acupuncturist and Massage Therapist, Ade specializes in muscular pain and skeletal disease and is known for helping to remove powerful emotional blocks through body therapy. His goal is to assist others in their wellness pursuits.
                        He recognizes that people manifest ailments and pain due to blockage both physically and emotionally which can ultimately imprison a person's body. But through touch therapy, Ade assists his clients in reconnecting with their bodies and beginning a healing process.
                      </p>
                      </Row>
                  )}
                  {props.data.page === 'team' &&
                    props.data.data === 'team_4_kwasausya' && (
                      <Row className="detail_content_row">
                      <Image src={team_4} className="detailViewer_Img detailStaffImg" fluid/>
                      <p className="detailViewer_text">
                        Name: Kwasausya Khepera
                      </p>
                      <p className="detailViewer_text">
                        Role:
                      </p>
                      <p className="detailViewer_text">
                        Bio:
                        Introduced to living foods in 1994 while working at a well known holistic health center in Brooklyn, NY. The  living foods she tasted were delicious! However, when looking to find more classes she found a lot of bland food with no flavor and "no sauce".  Fresh out of high school and starting to earn her own living, she was drawn to health as a direct result of witnessing the out of control obesity in her own family as well as in the church her family attended. She grew up with a family of southern and Caribbean background eating a lot of well seasoned dishes with loads of flavor! She also, unfortunately, witnessed the long term effects of all the "soul" food eating in the overwhelming obesity, diabetes, cancer, mastectomies, amputations, heart disease, and depression as a result of junk "food" intake as well as drug and alcohol abuse, and stress of chasing the carrot of the "American" dream from those around her. Her inner city journey led her to African dance classes held by Forces of Nature Dance Company, where she met her godparents Smst Dele and Smsu Abdel Salaam and the Temple of the Living Book. Her godparents were and still are the most vibrant examples of adult health in the solar 131community she had ever experienced and she watched and followed their example closely. She became "vegetarian" although consuming a lot of processed foods along with over-cooked vegetables and some fresh fruit.  After a home birth and nursing, she made all of her son's foods from scratch at home. She then traveled for several years as a domestic and international flight attendant, carrying most of her healthy food in her suitcase, before deciding to go to culinary school. Seeking even more education, she was very disappointed with the nutrition and dietetic programs offered in the college setting. She has participated successfully in fitness competitions, trained private clients, and has been a top trainer at one of the most exclusive gyms in New York City for well over a decade.  She credits her 30 years plus health and culinary journey for giving her a whole next level of comprehension of 100% raw and living foods consumption and its effects on new generations of children and relationships. When she is not working on her " Sistah Buttahfly and Sistah Monkey" audio and YouTube puppet series for children and adults to eat better, she gets around New York with her fresh fruits and vegetables from the food coop and farmer's market on her bicycle. She consumes 100% whole living foods (no dehydrators) and serves it to her family, community, as well as shares its message with the global community neighborhood.
                      </p>
                      </Row>
                  )}
                  {props.data.page === 'team' &&
                    props.data.data === 'team_5_perdella' && (
                      <Row className="detail_content_row">
                      <Image src={team_5} className="detailViewer_Img detailStaffImg" fluid/>
                      <p className="detailViewer_text">
                        Name: Perdella
                      </p>
                      <p className="detailViewer_text">
                        Role:
                      </p>
                      <p className="detailViewer_text">
                        Bio:
                        Dance is my life. Social change is what I live for. Purpose keeps me motivated. Love keeps me alive, but above all, the breath of my ancestors living inside me gives me the strength to endure.
                        My name is Perdella Jn. Baptiste and I am a student of life pursing a Liberal Arts Degree with a minor in early childhood intervention Medgar Evers College in Brooklyn New York. I believe that having a strong foundation is essential when aspiring to achieve your best. Being born into a family in the island of Saint Lucia who believe in rearing a child with strong work and moral ethics has enabled me to become a well-rounded individual. It has kept me grounded in ways that allowed me the freedom to explore the true essence of life. During that process, I have come to understand that, as important as it may seem to know what I want to become in life, it is equally essential to know where I am coming from.
                      </p>
                      </Row>
                  )}


                  {props.data.page === 'parallax' &&
                    props.data.data === 'fiveIs_test' && (
                      <Row className="parallax_row">
                        <p className="detailViewer_text">
                          Test test toast!!!!
                        </p>
                      </Row>
                  )}


                  {props.data.page === 'path' &&
                    props.data.data === 'fiveIs_inspire' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                         Be inspired to detox during a 4-day long retreat in lush tropical locations while rejuvenating your soul.
                         </p>
                      </Row>
                  )}
                  {props.data.page === 'path' &&
                    props.data.data === 'fiveIs_immerse' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                        Committ and immerse your entire body and being as you learn.
                        </p>
                      </Row>
                  )}
                  {props.data.page === 'path' &&
                    props.data.data === 'fiveIs_invigorate' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                        Invigorate your life energy during our daily High Vitality activities.
                        </p>
                      </Row>
                  )}
                  {props.data.page === 'path' &&
                    props.data.data === 'fiveIs_improve' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                        Gain perspective and tools that contribute to how you can Improve your life.
                        </p>
                      </Row>
                  )}
                  {props.data.page === 'path' &&
                    props.data.data === 'fiveIs_incorporate' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                        You will find it easy to Incorporate these new tips and tools into your life when you leave us.
                        </p>
                      </Row>
                  )}


                  {props.data.page === 'retreat' &&
                    props.data.data === 'four_day_outline' && (
                      <Row className="detail_content_row">
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'packages' && (
                      <Row className="detail_content_row">
                        <p className="detailViewer_text">
                      -You will not be hungry --
                        --Beginner- Vegan food
                        --Intermediate- Live food
                        --Advanced- Juice cleanse( Liquids only)
                        </p>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'what_to_bring' && (
                      <Row className="detail_content_row">
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'logo' && (
                      <Row className="detail_content_row">
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'detox_rules' && (
                      <Row className="detail_content_row">
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'other_activities' && (
                      <Row className="detail_content_row">
                      </Row>
                  )}

                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_1' && (
                      <Row className="detail_content_row">
                        <Image src={location_1} className="detailViewer_Img" fluid/>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_2' && (
                      <Row className="detail_content_row">
                        <Image src={location_2} className="detailViewer_Img" fluid/>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_3' && (
                      <Row className="detail_content_row">
                        <Image src={location_3} className="detailViewer_Img" fluid/>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_4' && (
                      <Row className="detail_content_row">
                        <Image src={location_4} className="detailViewer_Img" fluid/>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_5' && (
                      <Row className="detail_content_row">
                        <Image src={location_5} className="detailViewer_Img" fluid/>
                      </Row>
                  )}
                  {props.data.page === 'retreat' &&
                    props.data.data === 'location_6' && (
                      <Row className="detail_content_row">
                        <Image src={location_6} className="detailViewer_Img" fluid/>
                      </Row>
                  )}

                </Row>

                <Row className="detailViewer_subRow team_links">

                </Row>

                <Row className="detailViewer_bottomRow">
                  <Button variant="outline-light" className="detailViewer_closeBtn" onClick={props.closeDetailViewer}>
                    Close
                  </Button>
                </Row>

              </Col>
            </Row>
          </div>
        </div>
      );
    }}
  </AuthContext.Consumer>
);

export default detailViewer;
