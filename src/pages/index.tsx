import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div>
                    <p style={{textAlign: 'center'}}>
                        <a className={styles.a}
                           href="https://github.com/MirrorX-Desktop/MirrorX">
                            <img src="https://img.shields.io/github/stars/MirrorX-Desktop/MirrorX"/>
                        </a>
                        <a className={styles.a}
                           href="https://discord.gg/asT4deaEGh">
                            <img src="https://img.shields.io/discord/1001077628238827620?label=Discord"/>
                        </a>
                        <a className={styles.a}
                           href="https://github.com/MirrorX-Desktop/MirrorX">
                            <img src="https://img.shields.io/github/license/MirrorX-Desktop/MirrorX"/>
                        </a>
                    </p>

                    {/*<p style={{textAlign: 'center'}}>*/}
                    {/*    <img src="https://raw.githubusercontent.com/MirrorX-Desktop/MirrorX/master/screenshot.png"*/}
                    {/*         width="50%" height="50%"/>*/}
                    {/*</p>*/}
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
