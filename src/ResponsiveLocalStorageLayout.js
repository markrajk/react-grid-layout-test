import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import BarGraph from './components/BarGraph';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { xl: 12, lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 50
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
        <button className="button button-primary" style={{ height: '36px', padding: '0 17px' }} onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{ xl: 1800, lg: 1440, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ xl: 12, lg: 9, md: 6, sm: 3, xs: 3, xxs: 3 }}
          rowHeight={30}
          layouts={this.state.layouts}
          isBounded={true}
          resizeHandles={['e']}
          margin={[30, 30]}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div key="1" data-grid={{ w: 3, h: 8, x: 0, y: 0, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>
          <div key="2" data-grid={{ w: 3, h: 8, x: 3, y: 0, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>
          <div key="3" data-grid={{ w: 3, h: 8, x: 6, y: 0, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>
          <div key="4" data-grid={{ w: 3, h: 8, x: 9, y: 8, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>
          <div key="5" data-grid={{ w: 3, h: 8, x: 0, y: 8, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>
          <div key="6" data-grid={{ w: 3, h: 8, x: 3, y: 8, minW: 2, minH: 8, maxH: 8 }}>
            <BarGraph />
          </div>

        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}