const { PageHero: SPageHero, TopicCard: STopicCard, TalkCard: STalkCard, CtaClose: SCtaClose, ContactBlock: SContactBlock, WebinarCard: SWebinarCard, EntryCard: SEntryCard, Pill: SPill, Grade: SGrade, FactPanel: SFactPanel } = window.TerezaVGnerovDesignSystem_360dc4;
const DD = window.TV_DATA;

/* Every screen runs on the same four moves as a board: a kicker, a claim, a
   rule, and air. Sections are separated by a hairline, never by a change of
   ground; a dark band appears at most twice a page. */

function TopicsScreen() {
  return (
    <>
      <SPageHero eyebrow="Témata" heading="Osm oblastí, které učím i praktikuji."
        lead="Za každým tématem je výuka na 1.&nbsp;LF UK, klinická praxe nebo výzkum. Barva tématu nese informaci, ne dekoraci, proto je jméno tématu vždy vedle ní v textu." />
      <section className="w-sec-tight">
        <div className="shell">
          <div className="w-rows">
            {DD.topics.map((t) => <STopicCard key={t.slug} {...t} href={`#/temata/${t.slug}`} />)}
          </div>
        </div>
      </section>
      <SCtaClose ctaHref="#/kontakt" phone={DD.phone} phoneHref={DD.phoneHref} sig="../../assets/sig-mint.png" />
    </>
  );
}

function TopicScreen({ slug }) {
  const t = DD.topics.find((x) => x.slug === slug) || DD.topics[0];
  const related = DD.talks.filter((k) => k.topic === t.name);
  return (
    <div className={`t-${t.theme}`}>
      <SPageHero eyebrow={t.name}
        heading={t.name === 'Ženské zdraví' ? 'Cyklus není překážka tréninku.' : `${t.name}, a co za tím stojí.`}
        lead={t.summary} icon={t.slug} />
      <section className="w-sec w-ruled">
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)', gap: 'clamp(28px,4vw,72px)', alignItems: 'start' }}>
          <div>
            <span className="w-kicker">Co v tomto tématu učím</span>
            <div style={{ marginTop: 20 }}><SGrade level="kohorta" /></div>
            <p className="w-meta" style={{ marginTop: 16, maxWidth: '34ch', textTransform: 'none', letterSpacing: 0, lineHeight: 1.5 }}>
              Stupeň důkazu uvádí autorka. Tam, kde zdroj návrh studie neuvádí, chybí, a to je záměr.
            </p>
          </div>
          <div>
            <p className="w-lead" style={{ color: 'var(--ink)' }}>{t.summary}</p>
            <p className="w-body" style={{ marginTop: 24, color: 'var(--muted)' }}>
              Co je v tématu sporné, se říká v jedné větě a s mezí platnosti, ne vynecháním.
            </p>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="w-sec w-ruled">
          <div className="shell">
            <span className="w-kicker">K tématu přednáším</span>
            <div className="w-cols w-cols-2" style={{ marginTop: 32 }}>
              {related.map((k) => <STalkCard key={k.id} title={k.title} abstract={k.abstract} meta={k.meta} topicName={k.topic} image={k.image} alt={k.alt} href="#/prednasky" />)}
            </div>
          </div>
        </section>
      )}
      <SCtaClose theme={t.theme} ctaHref="#/kontakt" phone={DD.phone} phoneHref={DD.phoneHref} sig="../../assets/sig-mint.png" />
    </div>
  );
}

function TalksScreen() {
  return (
    <>
      <SPageHero eyebrow="Přednášky" heading="Dvě přednášky, které si můžete objednat."
        lead="Prezenčně i online, pro veřejnost, nutriční terapeuty a lékaře. Česky i anglicky." />
      <section className="w-sec-tight">
        <div className="shell">
          <div className="w-cols w-cols-2">
            {DD.talks.map((k) => <STalkCard key={k.id} title={k.title} abstract={k.abstract} meta={k.meta} topicName={k.topic} image={k.image} alt={k.alt} href="#/kontakt" cta="Objednat přednášku" />)}
          </div>
        </div>
      </section>
      <section className="w-sec w-ruled">
        <div className="shell">
          <span className="w-kicker">Vystoupení</span>
          <h2 className="w-claim w-claim-n" style={{ marginTop: 16, marginBottom: 40 }}>Kde jsem mluvila mimo posluchárnu.</h2>
          <div className="w-rows">
            <SEntryCard title="Deep Talks 151" meta="Podcast · 2025" href="#" external />
            <SEntryCard title="Publikační seznam připravuji." meta="Zatím nedodáno" />
          </div>
        </div>
      </section>
      <SCtaClose ctaHref="#/kontakt" phone={DD.phone} phoneHref={DD.phoneHref} sig="../../assets/sig-mint.png" />
    </>
  );
}

/* The webinar collection is empty at launch by design. One true sentence and
   the two places she will announce it: never a "coming soon" card. */
function WebinarsScreen() {
  const [sold, setSold] = React.useState(false);
  return (
    <>
      <SPageHero eyebrow="Webináře" heading="Termíny dalších webinářů připravuji."
        lead="Kde se o nich dozvíte první: na Instagramu, nebo mi rovnou napište." />
      <section className="w-sec-tight">
        <div className="shell">
          {!sold ? (
            <div style={{ maxWidth: '60ch' }}>
              <p className="w-body" style={{ color: 'var(--muted)' }}>
                Zatím není vypsaný žádný termín. Sledujte <a className="link" href={DD.instagramUrl} target="_blank" rel="noopener noreferrer">{DD.instagram}</a>.
              </p>
              <div className="w-actions" style={{ marginTop: 36 }}>
                <SPill href="#/kontakt" label="Napište mi" />
                <a className="w-link" href="#/webinare" onClick={(e) => { e.preventDefault(); setSold(true); }}>Ukázka: vypsaný termín</a>
              </div>
            </div>
          ) : (
            <div className="tv-webinar-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
              <div>
                <span className="w-kicker">Vypsaný termín</span>
                <h2 className="w-claim w-claim-n" style={{ marginTop: 16 }}>Výživa v nemoci: co sledovat doma.</h2>
                <p className="w-body" style={{ color: 'var(--muted)', marginTop: 22 }}>
                  Devadesát minut o tom, jak poznat riziko podvýživy u blízkého v&nbsp;rekonvalescenci, co má smysl vážit a kdy volat nutričního terapeuta.
                </p>
                <div style={{ marginTop: 26 }}><SGrade level="konsenzus" /></div>
                <div className="w-rows" style={{ marginTop: 40 }}>
                  <SWebinarCard title="Výživa v nemoci" when="14. října 2026, 18:00" duration="90 min" price="890 Kč" />
                </div>
              </div>
              <SFactPanel
                rows={[{ label: 'Termín', value: '14. října 2026, 18:00' }, { label: 'Délka', value: '90 minut' }, { label: 'Kapacita', value: '60 míst' }, { label: 'Cena', value: '890 Kč', big: true }]}
                price="890 Kč" leaving="Odchod na Stripe" />
            </div>
          )}
        </div>
      </section>
      <SCtaClose ctaHref="#/kontakt" phone={DD.phone} phoneHref={DD.phoneHref} sig="../../assets/sig-mint.png" />
    </>
  );
}

function ContactScreen() {
  return (
    <>
      <SPageHero eyebrow="Kontakt" heading="Napište mi."
        lead="Tři cesty do jedné schránky. Formulář tu není: nemám backend, který by ho přijal, a formulář, který tiše selže, je horší než otevřený e-mail." />
      <section className="w-sec-tight">
        <div className="shell">
          <SContactBlock heading="Tři důvody, proč se ozvat." routes={DD.routes} phone={DD.phone} phoneHref={DD.phoneHref}
            clinic={DD.clinic} email={DD.email} emailHref={DD.emailHref}
            photo="../../assets/img/contact-squash.jpg" photoAlt="Zelenina na tmavém stole, tónovaná do modré" />
        </div>
      </section>
    </>
  );
}

function AboutScreen() {
  return (
    <>
      <SPageHero eyebrow="O mně" heading="Prošla jsem všemi stupni zdravotní péče."
        lead="Od akutního lůžka po domácí péči. Čtyři tituly, dvě pracoviště, jedno téma rozdělené do osmi." />
      <section className="w-sec-tight">
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.7fr) minmax(0,1.3fr)', gap: 'clamp(28px,4vw,72px)', alignItems: 'start' }}>
          <div className="w-photo" style={{ aspectRatio: '3 / 4' }}>
            <img src="../../assets/img/about-grip.jpg" alt="Ruka na ose činky, tónovaná do modré" />
          </div>
          <div>
            <ul className="w-rows" style={{ listStyle: 'none' }}>
              {DD.facts.map((f) => (
                <li className="w-row" key={f} style={{ gridTemplateColumns: 'minmax(0,1fr)', paddingTop: 20, paddingBottom: 20 }}>
                  <span className="w-body" style={{ maxWidth: 'none' }}>{f}</span>
                </li>
              ))}
            </ul>
            <p className="w-meta" style={{ marginTop: 28, textTransform: 'none', letterSpacing: 0, lineHeight: 1.6, maxWidth: '56ch' }}>
              Bez odkazu, protože zdrojová adresa zatím chybí. Absence se značí, nedoplňuje se.
            </p>
          </div>
        </div>
      </section>
      <SCtaClose ctaHref="#/kontakt" phone={DD.phone} phoneHref={DD.phoneHref} sig="../../assets/sig-mint.png" />
    </>
  );
}

Object.assign(window, { TopicsScreen, TopicScreen, TalksScreen, WebinarsScreen, ContactScreen, AboutScreen });
