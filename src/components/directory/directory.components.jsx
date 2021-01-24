import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section: [
        {
          title: "Hats",
          imageUrl:
            "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.pexels.com/photos/6044143/pexels-photo-6044143.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "Womens",
          imageUrl:
            "https://images.pexels.com/photos/4946659/pexels-photo-4946659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          size: "large",
          id: 4,
          linkUrl: "womens",
        },
        {
          title: "Mens",
          imageUrl:
            "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          size: "large",
          id: 5,
          linkUrl: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
