const { Pill: HPill, TopicCard: HTopicCard, TalkCard: HTalkCard, InstitutionCard: HInstitutionCard, ClaimBand: HClaimBand, FaqList: HFaqList, CtaClose: HCtaClose, SplitHero: HSplitHero, Grade: HGrade, Icon: HIcon } = window.TerezaVGnerovDesignSystem_360dc4;
const HD = window.TV_DATA;
/* SplitHero is new in 0.8.0. If a consuming project is on an older bundle the
   page degrades to the shared PageHero rather than crashing. */
const HHero = HSplitHero || (({ heading, lead, eyebrow }) => <SectionHeadFallback heading={heading} lead={lead} eyebrow={eyebrow} />);

/* A section opens the way a board does: a tracked mono kicker, a claim that is
   a full sentence, and a rule above the whole thing. Nothing is centred: the
   deck starts everything on one x, and so does the page. */
function SectionHeadFallback({ eyebrow, heading, lead }) {
  const { PageHero } = window.TerezaVGnerovDesignSystem_360dc4;
  return <PageHero eyebrow={eyebrow} heading={heading} lead={lead} />;
}

function SectionHead({ eyebrow, heading, action, grade }) {
  return (
    <div style={{ marginBottom: 'clamp(40px,4.4vw,68px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
      <div>
        {eyebrow ? <span className="w-kicker">{eyebrow}</span> : null}
        <h2 className="w-claim w-claim-n" style={{ marginTop: eyebrow ? 16 : 0 }}>{heading}</h2>
        {grade ? <div style={{ marginTop: 18 }}><HGrade level={grade} /></div> : null}
      </div>
      {action}
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <HHero
        eyebrow="Klinická výživa"
        heading="Osm témat. Za každým něco skutečného."
        lead="Klinická nutriční terapeutka a odborná asistentka 1.&nbsp;LF UK. Učím, přednáším a pracuji na Klinice geriatrie a interní medicíny 1.&nbsp;LF UK a VFN."
        image="../../assets/img/hero-kitchen.jpg"
        alt="Dřevěné prkénko s cibulí a česnekem, tónované do modré"
        sig="../../assets/sig-blue.png"
        actions={<>
          <HPill href="#/temata" label="Projít témata" />
          <a className="w-link" href={HD.phoneHref}><HIcon name="phone" size={17} />{HD.phone}</a>
        </>}
      />

      {/* The mission statement: the deck's OPEN board. One sentence, a lot of air,
          the monogram under it. */}
      <section className="w-sec">
        <div className="shell">
          <p className="w-statement" style={{ fontSize: 'clamp(30px,3.6vw,62px)', maxWidth: '30ch' }}>
            Nedělám jedno téma. Dělám osm, a za každým je výuka, ordinace nebo výzkum.
          </p>
          <div style={{ marginTop: 'clamp(40px,4vw,64px)', display: 'flex', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
            <img src="../../assets/sig-blue.png" alt="Monogram Terezy Vágnerové" style={{ width: 120, height: 'auto' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20 }}>Tereza Vágnerová</p>
              <p className="w-meta" style={{ marginTop: 6 }}>Klinická nutriční terapeutka, 1.&nbsp;LF UK a VFN</p>
            </div>
          </div>
        </div>
      </section>

      {/* About: claim beside evidence, the deck's BESIDE board. Facts on hairlines,
          figures in Geist 300. */}
      <section className="w-sec w-ruled">
        <div className="shell tv-about">
          <div>
            <span className="w-kicker">Záznam</span>
            <h2 className="w-claim" style={{ marginTop: 16 }}>Prošla jsem všemi stupni zdravotní péče.</h2>
            <div className="w-actions" style={{ marginTop: 36 }}><HPill href="#/o-mne" label="Více o mně" small /></div>
          </div>
          <div>
            <ul className="w-rows" style={{ listStyle: 'none' }}>
              {HD.facts.map((f) => (
                <li className="w-row" key={f} style={{ gridTemplateColumns: 'auto minmax(0,1fr)', alignItems: 'baseline', paddingTop: 20, paddingBottom: 20 }}>
                  <span className="w-meta" style={{ color: 'var(--accent)' }}>·</span>
                  <span className="w-body">{f}</span>
                </li>
              ))}
            </ul>
            <div className="w-cols w-cols-3" style={{ marginTop: 'clamp(32px,3.4vw,52px)' }}>
              {HD.stats.map((s) => (
                <div key={s.label} className="w-col-ruled w-col-ruled-acc">
                  <span className="w-figure" style={{ display: 'block', fontSize: 'clamp(40px,4vw,64px)' }}>{s.figure}</span>
                  <span className="w-meta" style={{ display: 'block', marginTop: 10 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The eight subjects, as an index of rows. */}
      <section className="w-sec w-ruled">
        <div className="shell">
          <SectionHead eyebrow="Témata" heading="Osm oblastí, které učím i praktikuji." />
          <div className="w-rows">
            {HD.topics.map((t) => <HTopicCard key={t.slug} {...t} href={`#/temata/${t.slug}`} />)}
          </div>
        </div>
      </section>

      {/* Dark punctuation, once: a claim on a duotoned photograph. */}
      <HClaimBand claim="Důkazy místo dojmů." image="../../assets/img/band-lift.jpg" alt="Žena zvedající činku ve stojanu, tónovaná do modré" />

      <section className="w-sec">
        <div className="shell">
          <SectionHead eyebrow="Kde působím" heading="Čtyři instituce, které to mohou potvrdit." />
          <div className="w-rows">
            {HD.institutions.map((i) => <HInstitutionCard key={i.name} {...i} />)}
          </div>
        </div>
      </section>

      <section className="w-sec w-ruled">
        <div className="shell">
          <SectionHead eyebrow="Přednáším" heading="Dvě přednášky, které si můžete objednat."
            action={<HPill href="#/prednasky" label="Všechny přednášky" small />} />
          <div className="w-cols w-cols-2">
            {HD.talks.map((t) => <HTalkCard key={t.id} title={t.title} abstract={t.abstract} meta={t.meta} topicName={t.topic} image={t.image} alt={t.alt} href="#/prednasky" />)}
          </div>
        </div>
      </section>

      <section className="w-sec w-ruled">
        <div className="shell tv-faq-layout">
          <div>
            <span className="w-kicker">Otázky</span>
            <h2 className="w-claim w-claim-n" style={{ marginTop: 16 }}>Co se ptáte nejčastěji.</h2>
          </div>
          <HFaqList items={HD.faq} />
        </div>
      </section>

      <HCtaClose ctaHref="#/kontakt" phone={HD.phone} phoneHref={HD.phoneHref} sig="../../assets/sig-mint.png" />
    </>
  );
}

Object.assign(window, { HomeScreen, SectionHead });
