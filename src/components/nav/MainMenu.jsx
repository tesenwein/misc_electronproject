import React, { Component } from "react";
import { NavPane, NavPaneItem } from 'react-desktop/windows';
import { Icon } from 'react-icons-kit'
import { ic_home, ic_settings, ic_search } from 'react-icons-kit/md/'
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Campaigns from "../pages/Campaigns";
import CampaignEdit from "../pages/CampaignEdit";
import Settings from "../pages/Settings";

export default class MainMenu extends Component {


  constructor(props) {
    super(props);

    this.state = {
      selected: 'home'
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {

    const IconHome = <Icon icon={ic_home} />
    const IconCampaign = <Icon icon={ic_search} />
    const IconSettings = <Icon icon={ic_settings} />

    return (
      <NavPane openLength={200}
        theme="light">
        <NavPaneItem
          push
          title="Home"
          icon={IconHome}
          padding="10px 20px"
          selected={this.state.selected === "home"}
          onSelect={() => this.setState({ selected: "home" })}>
          <Route exact path="/" component={Home} />
        </NavPaneItem>
        <NavPaneItem
          push
          title="Campaigns"
          icon={IconCampaign}
          padding="10px 20px"
          selected={this.state.selected === "campaign"}
          onSelect={() => this.setState({ selected: "campaign" })}>
          <Route exact path="/campaigns" component={Campaigns} />
        </NavPaneItem>
        <NavPaneItem
          title="Settings"
          icon={IconSettings}
          padding="10px 20px"
          selected={this.state.selected === "settings"}
          onSelect={() => this.setState({ selected: "settings" })}>
          <Route exact path="/settings" component={Settings} />
        </NavPaneItem>
      </NavPane>
    )
  }
}
