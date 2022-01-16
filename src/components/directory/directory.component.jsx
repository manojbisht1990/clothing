import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections:[
                {
                  title: 'hats',
                  //imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  imageUrl: 'images/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'images/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'images/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'images/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'images/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render (){

        return(
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id,...globalSection}) => (
                        <MenuItem key={id} {...globalSection} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;