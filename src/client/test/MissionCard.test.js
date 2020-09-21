import React from 'react';
import { shallow } from 'enzyme';
import  LaunchCard from '../components/LaunchCard';

describe("MyComponent", () => {
  it("should render correctly", () => {
    let launch = {
        rocket: {
            rocket_id: 1,
            first_stage : {
                cores: [
                    {land_success: true}
                ]
            }
        },
        links : {
          mission_patch_small: `https://images2.imgbox.com/d2/3b/bQaWiil0_o.png`
        }
    };
    const component = shallow(<LaunchCard  launch={launch}/>);
  });
  
});