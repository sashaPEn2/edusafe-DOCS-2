import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Учителя и предподаватели',
    Svg: require('@site/static/img/cherry-620.svg').default,
    description: (
      <>
        Узнают, можно ли публиковать фото детей в школьном блоге и как хранить электронные журналы.
      </>
    ),
  },
  {
    title: 'Студенты и школьники',
    Svg: require('@site/static/img/cherry-student-at-school-desk-studying-geometry.svg').default,
    description: (
      <>
        Узнают о своих правах при заполнении анкет и использовании образовательных платформ.
      </>
    ),
  },
  {
    title: 'Родители',
    Svg: require('@site/static/img/cherry-back-to-school.svg').default,
    description: (
      <>
        Разберётесь, какие данные о ребёнке школа вправе собирать и как защитить его цифровое пространство
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
        <Heading as="h3">{title}</Heading>
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
