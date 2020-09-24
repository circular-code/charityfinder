//https://en.wikipedia.org/wiki/List_of_charitable_foundations
//https://www.dzi.de/spenderberatung/das-spenden-siegel/liste-aller-spenden-siegel-organisationen-a-z/
//https://www.netzwerk-ebd.de/member-category/gemeinnuetzige-organisationen/?set-view-type=fulllist
//https://edelmut.org/organisationen/
//file:///C:/Users/steph/Downloads/gemeinnuetzige_organisationen.pdf als excel/json anfragen?
//https://www.unitedcharity.de/Hilfsorganisationen/Organisationen
//https://www.charitynavigator.org/

var data = [
    {
       "region":"Germany",
       "name":"action medeor - Deutsches Medikamenten-Hilfswerk e. V.",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "community"
       ],
       "link":"www.medeor.de"
    },
    {
       "region":"Germany",
       "name":"AGAPEDIA Stiftung für Kinder, Soziales und Bildung gGmbH",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.agapedia.de"
    },
    {
       "region":"Germany",
       "name":"Aktion Kulturland Gemeinnützige Stiftung für Landwirtschaft und Ökologie",
       "categories":[
          "culture",
          "environment",
          "community",
          "animals"
       ],
       "link":"www.aktion-kulturland.de"
    },
    {
       "region":"Germany",
       "name":"Aktion Sonnenschein - Hilfe für das mehrfach behinderte Kind",
       "categories":[
          "disabled",
          "youth",
          "kids",
          "culture"
       ],
       "link":"www.aktionsonnenschein.com"
    },
    {
       "region":"Germany",
       "name":"Albert-Schweitzer-Kinderdorf Hessen e.V.",
       "categories":[
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.ask-hessen.de"
    },
    {
       "region":"Germany",
       "name":"Albert-Schweitzer-Kinderdörfer und Familienwerke e.V. Bundesverband",
       "categories":[
          "old age",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.albert-schweitzer-verband.de"
    },
    {
       "region":"Germany",
       "name":"Alzheimer Forschung Initiative e.V.",
       "categories":[
          "old age",
          "health",
          "research"
       ],
       "link":"www.alzheimer-forschung.de"
    },
    {
       "region":"Germany",
       "name":"Amnesty International Deutschland e.V.",
       "categories":[
          "developing countries",
          "family",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.amnesty.de/testament"
    },
    {
       "region":"Germany",
       "name":"AMSEL, Aktion Multiple Sklerose Erkrankter Landesverband der DMSG in Baden-Württemberg e.V.",
       "categories":[
          "disabled",
          "health",
          "family",
          "community"
       ],
       "link":"www.amsel.de"
    },
    {
       "region":"Germany",
       "name":"ANDHERI HILFE e.V.",
       "categories":[
          "poverty",
          "developing countries",
          "kids",
          "environment",
          "community"
       ],
       "link":"www.andheri-hilfe.org"
    },
    {
       "region":"Germany",
       "name":"Animals' Angels e.V.",
       "categories":[
          "animals"
       ],
       "link":"www.animals-angels.de"
    },
    {
       "region":"Germany",
       "name":"Ärzte ohne Grenzen e.V.",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "kids"
       ],
       "link":"www.aerzte-ohne-grenzen.de"
    },
    {
       "region":"Germany",
       "name":"AtemWeg - Stiftung zur Erforschung von Lungenkrankheiten",
       "categories":[
          "health",
          "research"
       ],
       "link":"www.atemweg-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Augustinum Stiftung",
       "categories":[
          "old age",
          "disabled",
          "health",
          "kids",
          "culture"
       ],
       "link":"www.moeglichmacherwerden.de"
    },
    {
       "region":"Germany",
       "name":"Bärenherz Stiftung",
       "categories":[
          "health",
          "family",
          "youth",
          "kids"
       ],
       "link":"www.baerenherz.de"
    },
    {
       "region":"Germany",
       "name":"Berner Sennenhunde in Not e.V.",
       "categories":[
          "environment",
          "animals"
       ],
       "link":"www.berner-sennenhunde-in-not.de"
    },
    {
       "region":"Germany",
       "name":"Bethanien Kinder- und Jugenddorf Bergisch Gladbach",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.bethanien-kinderdoerfer.de"
    },
    {
       "region":"Germany",
       "name":"Bethanien Kinder- und Jugenddorf Eltville",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.bethanien-kinderdoerfer.de"
    },
    {
       "region":"Germany",
       "name":"Bethanien Kinderdörfer gGmbH",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.bethanien-kinderdoerfer.de"
    },
    {
       "region":"Germany",
       "name":"Björn Schulz Stiftung",
       "categories":[
          "health",
          "family",
          "kids",
          "community"
       ],
       "link":"www.bjoern-schulz-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Bund für Umwelt und Naturschutz Deutschland -BUND-, Landesverband Baden-Württemberg e.V.",
       "categories":[
          "environment"
       ],
       "link":"www.bund-bawue.de"
    },
    {
       "region":"Germany",
       "name":"Bundesverband Selbsthilfe Körperbehinderter e.V.",
       "categories":[
          "disabled",
          "health",
          "community"
       ],
       "link":"www.bsk-ev.org"
    },
    {
       "region":"Germany",
       "name":"Bundesvereinigung Lebenshilfe e.V.",
       "categories":[
          "disabled",
          "family",
          "kids",
          "community"
       ],
       "link":"www.lebenshilfe.de"
    },
    {
       "region":"Germany",
       "name":"Cap Anamur/Deutsche Not-Ärzte e.V.",
       "categories":[
          "health",
          "developing countries",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.cap-anamur.org"
    },
    {
       "region":"Germany",
       "name":"Caritas-Gemeinschaftsstiftung für das Bistum Aachen",
       "categories":[
          "old age",
          "poverty",
          "family",
          "kids",
          "community"
       ],
       "link":"www.caritasstiftung-aachen.de"
    },
    {
       "region":"Germany",
       "name":"Claudia Lucas Stiftung",
       "categories":[
          "health",
          "family",
          "kids",
          "culture"
       ],
       "link":"www.claudia-lucas-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Conpart e.V.",
       "categories":[
          "disabled",
          "health",
          "kids",
          "community"
       ],
       "link":"www.conpart-bremen.de"
    },
    {
       "region":"Germany",
       "name":"CVJM-Gesamtverband in Deutschland e. V.",
       "categories":[
          "developing countries",
          "youth",
          "kids",
          "religion",
          "community"
       ],
       "link":"www.cvjm.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche AIDS-Stiftung",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "family"
       ],
       "link":"www.aids-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Alzheimer Gesellschaft e. V. Selbsthilfe Demenz",
       "categories":[
          "old age",
          "disabled",
          "health",
          "community"
       ],
       "link":"www.deutsche-alzheimer.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Arthrose-Hilfe e.V.",
       "categories":[
          "health",
          "Krankheitswesen"
       ],
       "link":"www.arthrose.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Demenzhilfe - DZNE-Stiftung für Forschung und Innovation",
       "categories":[
          "health",
          "research"
       ],
       "link":"www.deutsche-demenzhilfe.com"
    },
    {
       "region":"Germany",
       "name":"Deutsche Gesellschaft zur Rettung Schiffbrüchiger",
       "categories":[
          "health",
          "research",
          "environment",
          "sport"
       ],
       "link":"www.seenotretter.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Hirntumorhilfe e.V.",
       "categories":[
          "health",
          "family",
          "research"
       ],
       "link":"www.hirntumorhilfe.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche KinderKrebshilfe der Deutschen Krebshilfe (Stiftung)",
       "categories":[
          "health",
          "family",
          "youth",
          "kids",
          "research"
       ],
       "link":"www.kinderkrebshilfe.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Krebshilfe (Stiftung )",
       "categories":[
          "health",
          "family",
          "research"
       ],
       "link":"www.krebshilfe.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Rheuma-Liga Bundesverband e.V.",
       "categories":[
          "disabled",
          "health",
          "youth",
          "research",
          "community"
       ],
       "link":"www.rheuma-liga.de"
    },
    {
       "region":"Germany",
       "name":"Deutsche Stiftung für Demenzerkrankte - Wilhelm von Lauff-Stiftung",
       "categories":[
          "old age",
          "family",
          "health",
          "community"
       ],
       "link":"www.demenzstiftung.de"
    },
    {
       "region":"Germany",
       "name":"Deutscher Kinderhospizverein e.V.",
       "categories":[
          "disabled",
          "health",
          "family",
          "kids",
          "community"
       ],
       "link":"www.deutscher-kinderhospizverein.de"
    },
    {
       "region":"Germany",
       "name":"Deutscher Kinderschutzbund Kreisverband Ahrweiler e.V.",
       "categories":[
          "family",
          "youth",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.kinderschutzbund-ahrweiler.de"
    },
    {
       "region":"Germany",
       "name":"Deutscher Tierschutzbund e. V.",
       "categories":[
          "research",
          "environment",
          "animals"
       ],
       "link":"www.tierschutzbund.de"
    },
    {
       "region":"Germany",
       "name":"Deutsches Katholisches Blindenwerk e.V.",
       "categories":[
          "disabled",
          "health",
          "youth",
          "kids",
          "religion"
       ],
       "link":"www.blindenwerk.de"
    },
    {
       "region":"Germany",
       "name":"DRF Luftrettung - DRF e.V.",
       "categories":[
          "health",
          "community"
       ],
       "link":"drf-luftrettung.de"
    },
    {
       "region":"Germany",
       "name":"Elterninitiative für krebskranke Kinder Jena e.V.",
       "categories":[
          "health",
          "family",
          "kids",
          "community"
       ],
       "link":"www.ekk-jena.de"
    },
    {
       "region":"Germany",
       "name":"Evangelische Erziehungsstiftung Gefrees",
       "categories":[
          "youth",
          "kids",
          "religion",
          "culture"
       ],
       "link":"www.jesgefrees.de"
    },
    {
       "region":"Germany",
       "name":"Evangelische Stiftung Alsterdorf",
       "categories":[
          "alcohol",
          "drugs",
          "disabled",
          "health",
          "family",
          "youth",
          "kids",
          "culture",
          "community",
          "sport"
       ],
       "link":"www.alsterdorf.de"
    },
    {
       "region":"Germany",
       "name":"Evangelische Stiftung Lichtenstern",
       "categories":[
          "disabled",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.lichtenstern.de"
    },
    {
       "region":"Germany",
       "name":"Evangelische Stiftung Volmarstein",
       "categories":[
          "old age",
          "disabled",
          "health",
          "research",
          "religion"
       ],
       "link":"www.volmarstein.info"
    },
    {
       "region":"Germany",
       "name":"Evangelisches Johannesstift SbR",
       "categories":[
          "disabled",
          "health",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.evangelisches-johannesstift.de"
    },
    {
       "region":"Germany",
       "name":"Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
       "categories":[
          "health",
          "family",
          "kids",
          "research",
          "community"
       ],
       "link":"www.kinderherzen.de"
    },
    {
       "region":"Germany",
       "name":"Forschungsinstitut Kinderkrebs-Zentrum Hamburg",
       "categories":[
          "health",
          "youth",
          "kids",
          "research"
       ],
       "link":"www.kinderkrebs-forschung.de"
    },
    {
       "region":"Germany",
       "name":"Frauen helfen Frauen e.V.",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.fhf-stuttgart.de"
    },
    {
       "region":"Germany",
       "name":"Freunde alter Menschen e.V.",
       "categories":[
          "old age",
          "health",
          "community"
       ],
       "link":"www.famev.de"
    },
    {
       "region":"Germany",
       "name":"Gebrüder-Gründler-Stiftung",
       "categories":[
          "alcohol",
          "drugs",
          "old age",
          "health",
          "kids"
       ],
       "link":"www.gruendler-stiftung.org"
    },
    {
       "region":"Germany",
       "name":"Gemeinschaftszentrum Sönke-Nissen-Park Stiftung",
       "categories":[
          "old age",
          "poverty",
          "family",
          "youth",
          "culture"
       ],
       "link":"www.gutshaus-glinde.de"
    },
    {
       "region":"Germany",
       "name":"Global Nature Fund (GNF)",
       "categories":[
          "developing countries",
          "environment",
          "animals"
       ],
       "link":"www.globalnature.org"
    },
    {
       "region":"Germany",
       "name":"Goethe-Universität Frankfurt am Main",
       "categories":[
          "health",
          "youth",
          "research",
          "culture"
       ],
       "link":"http://www.uni-frankfurt.de"
    },
    {
       "region":"Germany",
       "name":"Habitat für Humanity Deutschland e.V.",
       "categories":[
          "developing countries"
       ],
       "link":"www.habitatforhumanity.de"
    },
    {
       "region":"Germany",
       "name":"Hans-Rosenthal-Stiftung - schnelle Hilfe in akuter Not - e.V.",
       "categories":[
          "old age",
          "poverty",
          "family",
          "kids",
          "community"
       ],
       "link":"www.hans-rosenthal-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Helping Hands e.V.  Wirkungsvoll helfen · Nachhaltig verändern",
       "categories":[
          "poverty",
          "developing countries",
          "family",
          "kids",
          "community"
       ],
       "link":"www.helpinghandsev.org"
    },
    {
       "region":"Germany",
       "name":"Hinz&amp;Kunzt",
       "categories":[
          "alcohol",
          "drugs",
          "old age",
          "poverty",
          "unemployment",
          "community"
       ],
       "link":"www.hinzundkunzt.de"
    },
    {
       "region":"Germany",
       "name":"humedica e.V.",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "family",
          "kids"
       ],
       "link":"www.humedica.org"
    },
    {
       "region":"Germany",
       "name":"INTACT Mädchenhilfe, Internationale Aktion gegen die Beschneidung von Mädchen und Frauen e.V.",
       "categories":[
          "health",
          "developing countries",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.intact-ev.de"
    },
    {
       "region":"Germany",
       "name":"Internationale Christliche Botschaft Jerusalem - Deutscher Zweig e. V. (kurz: ICEJ e. V.)",
       "categories":[
          "poverty",
          "developing countries",
          "youth",
          "religion",
          "culture",
          "community"
       ],
       "link":"www.icej.de"
    },
    {
       "region":"Germany",
       "name":"IRIS-STIFTUNG",
       "categories":[
          "disabled",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.iris-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"J. Wilh. Tenten Stiftung",
       "categories":[
          "old age",
          "poverty",
          "disabled",
          "community"
       ],
       "link":"www.tenten-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"KARO e.V.",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.karo-ev.de"
    },
    {
       "region":"Germany",
       "name":"Katholische Jugendfürsorge der Erzdiözese München und Freising e.V.",
       "categories":[
          "disabled",
          "health",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.kjf-muenchen.de"
    },
    {
       "region":"Germany",
       "name":"Kinder von Tschernobyl - Stiftung des Landes Niedersachsen",
       "categories":[
          "health",
          "kids"
       ],
       "link":"www.tschernobyl.niedersachsen.de"
    },
    {
       "region":"Germany",
       "name":"Kinder- und Jugendhospizstiftung Balthasar",
       "categories":[
          "disabled",
          "health",
          "family",
          "youth",
          "kids"
       ],
       "link":"www.balthasarstiftung.de"
    },
    {
       "region":"Germany",
       "name":"Kinderheim Kleine Strolche e.V. - Hilfe für traumatisierte Kinder",
       "categories":[
          "youth",
          "kids",
          "community"
       ],
       "link":"www.kinderheim-kleine-strolche.de"
    },
    {
       "region":"Germany",
       "name":"kinderherzen - Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
       "categories":[
          "health",
          "family",
          "kids",
          "research",
          "community"
       ],
       "link":"www.kinderherzen.de"
    },
    {
       "region":"Germany",
       "name":"KINDERHILFE - Hilfe für krebs- und schwerkranke Kinder e.V.",
       "categories":[
          "health",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.kinderhilfe-ev.de"
    },
    {
       "region":"Germany",
       "name":"Kinderrechte Afrika e.V. - Zukunft für Kinder in Not",
       "categories":[
          "poverty",
          "developing countries",
          "family",
          "youth",
          "kids"
       ],
       "link":"www.kinderrechte-afrika.org"
    },
    {
       "region":"Germany",
       "name":"Kinderschutzbund Aachen e.V.",
       "categories":[
          "poverty",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.kinderschutzbund-aachen.de"
    },
    {
       "region":"Germany",
       "name":"Konrad-Adenauer-Stiftung e.V.",
       "categories":[
          "developing countries",
          "research",
          "culture"
       ],
       "link":"kas.de"
    },
    {
       "region":"Germany",
       "name":"Krebsverband Baden-Württemberg e. V.",
       "categories":[
          "health",
          "community"
       ],
       "link":"www.krebsverband-bw.de"
    },
    {
       "region":"Germany",
       "name":"Kurt-Hahn-Stiftung c/o Deutsches Stiftungszentrum GmbH",
       "categories":[
          "youth",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.kurt-hahn-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"Lebenszentrum Königsborn für Menschen mit Behinderungen",
       "categories":[
          "disabled",
          "health",
          "youth",
          "kids"
       ],
       "link":"www.lebenszentrum-koenigsborn.de"
    },
    {
       "region":"Germany",
       "name":"Leonhard gemeinnützige GmbH | Unternehmertum für Gefangene",
       "categories":[
          "alcohol",
          "drugs",
          "poverty",
          "unemployment",
          "culture",
          "community"
       ],
       "link":"www.leonhard.eu"
    },
    {
       "region":"Germany",
       "name":"Lichtbrücke e. V.",
       "categories":[
          "developing countries",
          "community"
       ],
       "link":"www.lichtbruecke.com"
    },
    {
       "region":"Germany",
       "name":"MainLichtblick e. V.",
       "categories":[
          "disabled",
          "health",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.mainlichtblick.de"
    },
    {
       "region":"Germany",
       "name":"Maria im Tann, Zentrum für Kinder-, Jugend- u. Familienhilfe",
       "categories":[
          "family",
          "youth",
          "kids"
       ],
       "link":"www.mariaimtann.de"
    },
    {
       "region":"Germany",
       "name":"Medica mondiale e. V.",
       "categories":[
          "health",
          "developing countries",
          "youth",
          "community"
       ],
       "link":"www.medicamondiale.org"
    },
    {
       "region":"Germany",
       "name":"Mercy Ships Deutschland e.V.",
       "categories":[
          "poverty",
          "health",
          "developing countries",
          "kids",
          "community"
       ],
       "link":"www.mercyships.de"
    },
    {
       "region":"Germany",
       "name":"missio-Internationales Katholisches Missionswerk e.V.",
       "categories":[
          "poverty",
          "developing countries",
          "family",
          "kids",
          "religion"
       ],
       "link":"www.missio-hilft.de"
    },
    {
       "region":"Germany",
       "name":"Mütter- und FamilienZentrum Ingelheim e.V. ( MütZe e.V.)",
       "categories":[
          "family",
          "youth",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.muetze-ingelheim.de"
    },
    {
       "region":"Germany",
       "name":"NABU Naturschutzbund e.V. Bundesgeschäftsstelle",
       "categories":[
          "environment",
          "animals"
       ],
       "link":"www.NABU.de"
    },
    {
       "region":"Germany",
       "name":"Niedersächsische Krebsgesellschaft e.V.",
       "categories":[
          "disabled",
          "health",
          "research",
          "community"
       ],
       "link":"www.nds-krebsgesellschaft.de"
    },
    {
       "region":"Germany",
       "name":"Niedersächsische Krebsstiftung",
       "categories":[
          "health",
          "research"
       ],
       "link":"www.nds-krebsstiftung.de"
    },
    {
       "region":"Germany",
       "name":"Nikolauspflege - Stiftung für blinde und sehbehinderte Menschen",
       "categories":[
          "disabled",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.nikolauspflege.de"
    },
    {
       "region":"Germany",
       "name":"PRO RETINA Deutschland e.V.",
       "categories":[
          "old age",
          "disabled",
          "health",
          "kids",
          "research"
       ],
       "link":"www.pro-retina.de"
    },
    {
       "region":"Germany",
       "name":"Rittergut Kleine Strolche gGmbH - Therapiezentrum für traumatisierte Kinder",
       "categories":[
          "youth",
          "kids",
          "community"
       ],
       "link":"www.kinderheim-kleine-strolche.de"
    },
    {
       "region":"Germany",
       "name":"ROTE NASEN Deutschland e.V.",
       "categories":[
          "old age",
          "health",
          "youth",
          "kids",
          "culture",
          "community"
       ],
       "link":"www.rotenasen.de"
    },
    {
       "region":"Germany",
       "name":"Rummelsberger Diakonie e.V.",
       "categories":[
          "old age",
          "family",
          "kids",
          "religion",
          "community"
       ],
       "link":"www.rummelsberger-diakonie.de"
    },
    {
       "region":"Germany",
       "name":"Sächsische Krebsgesellschaft e.V.",
       "categories":[
          "health",
          "community"
       ],
       "link":"www.skg-ev.de"
    },
    {
       "region":"Germany",
       "name":"SAVE Wildlife Conservation Fund - Stiftung",
       "categories":[
          "developing countries",
          "culture",
          "environment",
          "community",
          "animals"
       ],
       "link":"www.save-wildlife.org"
    },
    {
       "region":"Germany",
       "name":"SOS-Kinderdorf-Stiftung",
       "categories":[
          "disabled",
          "family",
          "youth",
          "kids",
          "community"
       ],
       "link":"www.sos-kinderdorf-stiftung.de"
    },
    {
       "region":"Germany",
       "name":"SOS-Kinderdörfer weltweit",
       "categories":[
          "poverty",
          "developing countries",
          "family",
          "kids",
          "community"
       ],
       "link":"www.sos-kinderdoerfer.de"
    },
    {
       "region":"Germany",
       "name":"SoVD Sozialverband Deutschland, Landesverband NRW",
       "categories":[
          "old age",
          "unemployment",
          "disabled",
          "family",
          "community"
       ],
       "link":"www.sovd-nrw.de"
    }
 ];
