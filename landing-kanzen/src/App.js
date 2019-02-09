import React, {Component} from 'react';
import logo from './logo.svg';
import bg1Img from './images/hero-1.jpg';
import './App.css';
import styled, {css} from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  padding: 10px 15px;
  font-size: 1.1em;
  color: #65a9f1;
  background: transparent;
  border: 2px solid #65a9f1;
  cursor: pointer;

  :focus {
    outline: none;
  }

  ${props =>
    props.primary &&
    css`
      color: white;
      background: #65a9f1;
    `};

  ${props =>
    props.large &&
    css`
      padding: 20px 30px;
    `};
`;

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: ${props => props.width || ''};
  margin: 0 auto;
  margin-left: ${props => props.ml || ''};
  margin-top: ${props => props.mt || ''};
  margin-right: ${props => props.mr || ''};
  margin-bottom: ${props => props.mb || ''};

  height: ${props => props.height || ''};
`;

//@Incomplete make container responsive

const Navbar = styled.ul`
  list-style: none;

  @media (max-width: 940px) {
    display: none;
  }
`;

Navbar.Item = styled.li`
  display: inline-block;
  padding: 0px 20px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: ${props => (props.bold ? 'bolder' : '')};
`;

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  color: ${props => props.color || ''};

  ${props =>
    props.centered &&
    css`
      align-items: center;
      text-align: center;
    `}

  ${Button} {
    margin-top: 20px;
  }
`;

const TwinText = styled.div`
  display: flex;
  height: ${props => props.height || '500px'};
  justify-content: center;
  align-items: center;
`;

TwinText.Left = styled.div`
  text-align: right;
  margin-right: 20px;
  flex: 1;
`;
TwinText.Right = styled.div`
  text-align: left;
  margin-left: 20px;
  flex: 1;
`;

const ImageDummy = styled.div`
  width: 300px;
  height: 300px;
  background: lightGrey;
  margin: auto;
  border-radius: 15px;
  box-shadow: 10px 10px 35px -10px rgba(94, 94, 94, 0.7);
`;

class App extends Component {
  render() {
    return (
      <Container width="70vw">
        <Header>
          <h1>KanZen</h1>
          <Navbar>
            <Navbar.Item>
              <Link bold href="/">
                Features
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link bold href="/">
                Pricing
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link bold href="/">
                Apps
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Button primary>Free Trial</Button>
            </Navbar.Item>
          </Navbar>
        </Header>
        <HeroContainer height="500px" mr="30vw" mb="100px" mt="100px">
          <h1>Managing Kanban is simple</h1>
          <p>
            KanZen is designed for agile teams to make their Kanban board
            management simple and help you focus on the right things.
          </p>
          <Button primary large>
            Get Started Free
          </Button>
        </HeroContainer>
        <HeroContainer centered ml="50px" mr="50px">
          <h1>Make Kanban planning more powerful</h1>
          <p>
            Authentic mustache mlkshk slow-carb. Tofu YOLO tousled godard, DIY
            sriracha hashtag man braid banjo mixtape hammock. Neutra brunch
            squid af cold-pressed etsy health goth, flannel tofu. Skateboard
            taxidermy succulents blog food truck jianbing farm-to-table
          </p>
        </HeroContainer>
        <TwinText>
          <TwinText.Left>
            <ImageDummy />
          </TwinText.Left>
          <TwinText.Right>
            <h1>A Place To Manage Every Board</h1>
            <p>
              Add items to your board, when tasks come up. Group them in stories
              and work collaboratively.
            </p>
          </TwinText.Right>
        </TwinText>
        <TwinText>
          <TwinText.Left>
            <h1>Track Progress</h1>
            <p>
              Get complete visibility on what is important in the team, See if
              you are you track and on time
            </p>
          </TwinText.Left>
          <TwinText.Right>
            <ImageDummy />
          </TwinText.Right>
        </TwinText>
        <TwinText>
          <TwinText.Left>
            <ImageDummy />
          </TwinText.Left>
          <TwinText.Right>
            <h1>Machine learning to prioritize</h1>
            <p>
              With the help on machine learning algorithm find whats the most
              important task to tackle now.
            </p>
          </TwinText.Right>
        </TwinText>
      </Container>
    );
  }
}

export default App;
