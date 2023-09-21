import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Rio',
    Svg: require('../../../static/img/logo.ico').default,
    description: (
      <>
		Rio is a terminal application that’s built with Rust, WebGPU, Tokio runtime. It targets to have the best frame per second experience as long you want, but is also configurable to use as minimal from GPU.

		The terminal renderer is based on redux state machine, lines that has not updated will not suffer a redraw. Looking for the minimal rendering process in most of the time. Rio is also designed to support WebAssembly runtime so in the future you will be able to define how a tab system will work with a WASM plugin written in your favorite language.

		Rio uses WGPU, which is an implementation of WebGPU for use outside of a browser and as backend for firefox’s WebGPU implementation. WebGPU allows for more efficient usage of modern GPU’s than WebGL. More info

		Applications using WPGU run natively on Vulkan, Metal, DirectX 11/12, and OpenGL ES; and browsers via WebAssembly on WebGPU and WebGL2.

		It also relies on Rust memory behavior, since Rust is a memory-safe language that employs a compiler to track the ownership of values that can be used once and a borrow checker that manages how data is used without relying on traditional garbage collection techniques. More info
      </>
    ),
  },
  {
    title: 'Development status?',
    Svg: require('../../../static/img/logo.ico').default,
    description: (
      <>
		You can follow me on Twitter (@raphamorims) or Bluesky (@mustache.bsky.social) to follow any update regarding Rio terminal development.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
