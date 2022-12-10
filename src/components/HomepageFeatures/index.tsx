import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Security',
        Svg: require('@site/static/img/security.svg').default,
        description: (
            <>
                Support end-to-end encryption natively keeps all data and behaviours under user control.
            </>
        ),
    },
    {
        title: 'Fast',
        Svg: require('@site/static/img/fast.svg').default,
        description: (
            <>
                Support hardware-accelerated screen acquisition and rendering. Allow p2p direct connections
                within LAN, minimize interaction delay.
            </>
        ),
    },
    {
        title: 'Open Source',
        Svg: require('@site/static/img/open.svg').default,
        description: (
            <>
                MirrorX is a COMPLETELY open source project. Not only client-side of MirrorX,
                but also includes server-side programs.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
