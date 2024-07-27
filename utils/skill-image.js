
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';


import canva from '/public/svg/skills/canva.svg';





import ionic from '/public/svg/skills/ionic.svg';





import picsart from '/public/svg/skills/picsart.svg';


import sketch from '/public/svg/skills/sketch.svg';


import penssyalvania from '/public/svg/skills/pennsylvania-panthers.svg';

import unity from '/public/svg/skills/unity.svg';


import hitman from '/public/svg/skills/hitman-1.svg';

import google from '/public/svg/skills/google-ads-2.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'hitman':
      return hitman;
   
 
    case 'google':
      return google;

   

 
  
  
    case 'penssal':
      return penssyalvania;
  

  
 

  

    case 'aws':
      return aws;
   
   

  
     
     




   

    case 'azure':
      return azure;
 

 
 
 
    case 'ionic':
      return ionic;
 

    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;

    case 'canva':
      return canva;
    default:
      break;
  }
}
