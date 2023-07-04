import React from 'react';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';


const Icon = ({icon, className}) => {
  switch(icon) {
    case "github":
      return <GitHubIcon className={className} />;
  }
}

export default Icon