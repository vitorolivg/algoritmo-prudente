import React, { ReactElement } from 'react';
import Eslint from '../../images/eslint.png';
import Firebase from '../../images/firebase.png';
import Flow from '../../images/flow.png';
import Gatsby from '../../images/gatsby.png';
import Html from '../../images/html5.png';
import Javascript from '../../images/javascript.png';
import Jest from '../../images/jest.png';
import NodeJs from '../../images/nodejs.png';
import ReactLogo from '../../images/react.png';
import ReactNative from '../../images/reactnative.png';
import Redux from '../../images/redux.png';
import Typescript from '../../images/typescript.png';
import Webpack from '../../images/webpack.png';
import Git from '../../images/git.png';
import Flexbox from '../../images/flexbox.png';

interface Technologies {
  [key: string]: {
    icon: string;
    type: string;
    name: string;
  };
}

export const Techs: Technologies = {
  ReactLogo: { icon: ReactLogo, type: 'Framework', name: 'React' },
  Javascript: { icon: Javascript, type: 'Language', name: 'Javascript' },
  ReactNative: { icon: ReactNative, type: 'Framework', name: 'React Native' },
  NodeJs: { icon: NodeJs, type: 'Library', name: 'Node.js' },
  Redux: { icon: Redux, type: 'Library', name: 'Redux' },
  Html: { icon: Html, type: 'Language', name: 'HTML5' },
  Css: { icon: Flexbox, type: 'Tool', name: 'CSS3' },
  Typescript: { icon: Typescript, type: 'Language', name: 'TypeScript' },
  Flow: { icon: Flow, type: 'Library', name: 'Flow' },
  Gatsby: { icon: Gatsby, type: 'Framework', name: 'Gatsby' },
  Git: { icon: Git, type: 'Tool', name: 'Git' },
  Eslint: { icon: Eslint, type: 'Tool', name: 'ESLint' },
  Jest: { icon: Jest, type: 'Library', name: 'Jest' },
  Firebase: { icon: Firebase, type: 'Platform', name: 'Firebase' },
  Webpack: { icon: Webpack, type: 'Tool', name: 'Webpack' },
};

interface TechnologyProps {
  name: string;
}

const TechLogo: React.SFC<TechnologyProps> = ({ name }) => (
  <img
    alt={`${name} ${Techs[name].type}`}
    title={`${name} ${Techs[name].type}`}
    src={Techs[name].icon}
    width={100}
    height={100}
  />
);

const Technology: React.SFC<TechnologyProps> = ({ name }) => (
  <>
    <TechLogo name={name} />
    <p>{Techs[name].name}</p>
  </>
);

export default Technology;
