import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons1}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/разъяснения---учителя">
            Учитель
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Школьник
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Родитель*
          </Link>
        </div>
        <div className={styles.buttons2}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Преподаватель     
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Студент
          </Link>
        </div>
        <p className="heroLAW">*Законные представители</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Главная - ${siteConfig.title}`}
      description="Ваш путеводитель по закону №99-З «О защите персональных данных» в образовании Беларуси. Понятные разборы каждой статьи, адаптированные под роль учителя, директора, родителя или ученика. Без юридического жаргона — только практика, примеры и уверенность в каждом решении.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
