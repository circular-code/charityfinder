// //https://en.wikipedia.org/wiki/List_of_charitable_foundations
// //https://www.dzi.de/spenderberatung/das-spenden-siegel/liste-aller-spenden-siegel-organisationen-a-z/
// //https://www.netzwerk-ebd.de/member-category/gemeinnuetzige-organisationen/?set-view-type=fulllist
// //https://edelmut.org/organisationen/
// //file:///C:/Users/steph/Downloads/gemeinnuetzige_organisationen.pdf als excel/json anfragen?
// //https://www.unitedcharity.de/Hilfsorganisationen/Organisationen
// //https://www.charitynavigator.org/

var data = [
   {
      "regions":"Germany",
      "name":"action medeor - Deutsches Medikamenten-Hilfswerk e. V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.medeor.de"
   },
   {
      "regions":"Germany",
      "name":"AGAPEDIA Stiftung für Kinder, Soziales und Bildung gGmbH",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.agapedia.de"
   },
   {
      "regions":"Germany",
      "name":"Aktion Kulturland Gemeinnützige Stiftung für Landwirtschaft und Ökologie",
      "categories":[
         {
            "name":"culture"
         },
         {
            "name":"environment"
         },
         {
            "name":"community"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.aktion-kulturland.de"
   },
   {
      "regions":"Germany",
      "name":"Aktion Sonnenschein - Hilfe für das mehrfach behinderte Kind",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         }
      ],
      "link":"www.aktionsonnenschein.com"
   },
   {
      "regions":"Germany",
      "name":"Albert-Schweitzer-Kinderdorf Hessen e.V.",
      "categories":[
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.ask-hessen.de"
   },
   {
      "regions":"Germany",
      "name":"Albert-Schweitzer-Kinderdörfer und Familienwerke e.V. Bundesverband",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.albert-schweitzer-verband.de"
   },
   {
      "regions":"Germany",
      "name":"Alzheimer Forschung Initiative e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"health"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.alzheimer-forschung.de"
   },
   {
      "regions":"Germany",
      "name":"Amnesty International Deutschland e.V.",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.amnesty.de/testament"
   },
   {
      "regions":"Germany",
      "name":"AMSEL, Aktion Multiple Sklerose Erkrankter Landesverband der DMSG in Baden-Württemberg e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.amsel.de"
   },
   {
      "regions":"Germany",
      "name":"ANDHERI HILFE e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"kids"
         },
         {
            "name":"environment"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.andheri-hilfe.org"
   },
   {
      "regions":"Germany",
      "name":"Animals' Angels e.V.",
      "categories":[
         {
            "name":"animals"
         }
      ],
      "link":"www.animals-angels.de"
   },
   {
      "regions":"Germany",
      "name":"Ärzte ohne Grenzen e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.aerzte-ohne-grenzen.de"
   },
   {
      "regions":"Germany",
      "name":"AtemWeg - Stiftung zur Erforschung von Lungenkrankheiten",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.atemweg-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Augustinum Stiftung",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         }
      ],
      "link":"www.moeglichmacherwerden.de"
   },
   {
      "regions":"Germany",
      "name":"Bärenherz Stiftung",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.baerenherz.de"
   },
   {
      "regions":"Germany",
      "name":"Berner Sennenhunde in Not e.V.",
      "categories":[
         {
            "name":"environment"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.berner-sennenhunde-in-not.de"
   },
   {
      "regions":"Germany",
      "name":"Bethanien Kinder- und Jugenddorf Bergisch Gladbach",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.bethanien-kinderdoerfer.de"
   },
   {
      "regions":"Germany",
      "name":"Bethanien Kinder- und Jugenddorf Eltville",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.bethanien-kinderdoerfer.de"
   },
   {
      "regions":"Germany",
      "name":"Bethanien Kinderdörfer gGmbH",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.bethanien-kinderdoerfer.de"
   },
   {
      "regions":"Germany",
      "name":"Björn Schulz Stiftung",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.bjoern-schulz-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Bund für Umwelt und Naturschutz Deutschland -BUND-, Landesverband Baden-Württemberg e.V.",
      "categories":[
         {
            "name":"environment"
         }
      ],
      "link":"www.bund-bawue.de"
   },
   {
      "regions":"Germany",
      "name":"Bundesverband Selbsthilfe Körperbehinderter e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.bsk-ev.org"
   },
   {
      "regions":"Germany",
      "name":"Bundesvereinigung Lebenshilfe e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.lebenshilfe.de"
   },
   {
      "regions":"Germany",
      "name":"Cap Anamur/Deutsche Not-Ärzte e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.cap-anamur.org"
   },
   {
      "regions":"Germany",
      "name":"Caritas-Gemeinschaftsstiftung für das Bistum Aachen",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.caritasstiftung-aachen.de"
   },
   {
      "regions":"Germany",
      "name":"Claudia Lucas Stiftung",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         }
      ],
      "link":"www.claudia-lucas-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Conpart e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.conpart-bremen.de"
   },
   {
      "regions":"Germany",
      "name":"CVJM-Gesamtverband in Deutschland e. V.",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"religion"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.cvjm.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche AIDS-Stiftung",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         }
      ],
      "link":"www.aids-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Alzheimer Gesellschaft e. V. Selbsthilfe Demenz",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.deutsche-alzheimer.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Arthrose-Hilfe e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"Krankheitswesen"
         }
      ],
      "link":"www.arthrose.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Demenzhilfe - DZNE-Stiftung für Forschung und Innovation",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.deutsche-demenzhilfe.com"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Gesellschaft zur Rettung Schiffbrüchiger",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"research"
         },
         {
            "name":"environment"
         },
         {
            "name":"sport"
         }
      ],
      "link":"www.seenotretter.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Hirntumorhilfe e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.hirntumorhilfe.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche KinderKrebshilfe der Deutschen Krebshilfe (Stiftung)",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.kinderkrebshilfe.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Krebshilfe (Stiftung )",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.krebshilfe.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Rheuma-Liga Bundesverband e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"research"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.rheuma-liga.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsche Stiftung für Demenzerkrankte - Wilhelm von Lauff-Stiftung",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"family"
         },
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.demenzstiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Deutscher Kinderhospizverein e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.deutscher-kinderhospizverein.de"
   },
   {
      "regions":"Germany",
      "name":"Deutscher Kinderschutzbund Kreisverband Ahrweiler e.V.",
      "categories":[
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderschutzbund-ahrweiler.de"
   },
   {
      "regions":"Germany",
      "name":"Deutscher Tierschutzbund e. V.",
      "categories":[
         {
            "name":"research"
         },
         {
            "name":"environment"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.tierschutzbund.de"
   },
   {
      "regions":"Germany",
      "name":"Deutsches Katholisches Blindenwerk e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"religion"
         }
      ],
      "link":"www.blindenwerk.de"
   },
   {
      "regions":"Germany",
      "name":"DRF Luftrettung - DRF e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"drf-luftrettung.de"
   },
   {
      "regions":"Germany",
      "name":"Elterninitiative für krebskranke Kinder Jena e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.ekk-jena.de"
   },
   {
      "regions":"Germany",
      "name":"Evangelische Erziehungsstiftung Gefrees",
      "categories":[
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"religion"
         },
         {
            "name":"culture"
         }
      ],
      "link":"www.jesgefrees.de"
   },
   {
      "regions":"Germany",
      "name":"Evangelische Stiftung Alsterdorf",
      "categories":[
         {
            "name":"alcohol"
         },
         {
            "name":"drugs"
         },
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         },
         {
            "name":"sport"
         }
      ],
      "link":"www.alsterdorf.de"
   },
   {
      "regions":"Germany",
      "name":"Evangelische Stiftung Lichtenstern",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.lichtenstern.de"
   },
   {
      "regions":"Germany",
      "name":"Evangelische Stiftung Volmarstein",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"research"
         },
         {
            "name":"religion"
         }
      ],
      "link":"www.volmarstein.info"
   },
   {
      "regions":"Germany",
      "name":"Evangelisches Johannesstift SbR",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.evangelisches-johannesstift.de"
   },
   {
      "regions":"Germany",
      "name":"Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"research"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderherzen.de"
   },
   {
      "regions":"Germany",
      "name":"Forschungsinstitut Kinderkrebs-Zentrum Hamburg",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.kinderkrebs-forschung.de"
   },
   {
      "regions":"Germany",
      "name":"Frauen helfen Frauen e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.fhf-stuttgart.de"
   },
   {
      "regions":"Germany",
      "name":"Freunde alter Menschen e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.famev.de"
   },
   {
      "regions":"Germany",
      "name":"Gebrüder-Gründler-Stiftung",
      "categories":[
         {
            "name":"alcohol"
         },
         {
            "name":"drugs"
         },
         {
            "name":"old age"
         },
         {
            "name":"health"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.gruendler-stiftung.org"
   },
   {
      "regions":"Germany",
      "name":"Gemeinschaftszentrum Sönke-Nissen-Park Stiftung",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"culture"
         }
      ],
      "link":"www.gutshaus-glinde.de"
   },
   {
      "regions":"Germany",
      "name":"Global Nature Fund (GNF)",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"environment"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.globalnature.org"
   },
   {
      "regions":"Germany",
      "name":"Goethe-Universität Frankfurt am Main",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"research"
         },
         {
            "name":"culture"
         }
      ],
      "link":"http://www.uni-frankfurt.de"
   },
   {
      "regions":"Germany",
      "name":"Habitat für Humanity Deutschland e.V.",
      "categories":[
         {
            "name":"developing countries"
         }
      ],
      "link":"www.habitatforhumanity.de"
   },
   {
      "regions":"Germany",
      "name":"Hans-Rosenthal-Stiftung - schnelle Hilfe in akuter Not - e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.hans-rosenthal-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Helping Hands e.V.  Wirkungsvoll helfen · Nachhaltig verändern",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.helpinghandsev.org"
   },
   {
      "regions":"Germany",
      "name":"Hinz&amp;Kunzt",
      "categories":[
         {
            "name":"alcohol"
         },
         {
            "name":"drugs"
         },
         {
            "name":"old age"
         },
         {
            "name":"poverty"
         },
         {
            "name":"unemployment"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.hinzundkunzt.de"
   },
   {
      "regions":"Germany",
      "name":"humedica e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.humedica.org"
   },
   {
      "regions":"Germany",
      "name":"INTACT Mädchenhilfe, Internationale Aktion gegen die Beschneidung von Mädchen und Frauen e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.intact-ev.de"
   },
   {
      "regions":"Germany",
      "name":"Internationale Christliche Botschaft Jerusalem - Deutscher Zweig e. V. (kurz: ICEJ e. V.)",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"youth"
         },
         {
            "name":"religion"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.icej.de"
   },
   {
      "regions":"Germany",
      "name":"IRIS-STIFTUNG",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.iris-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"J. Wilh. Tenten Stiftung",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"poverty"
         },
         {
            "name":"disabled"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.tenten-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"KARO e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.karo-ev.de"
   },
   {
      "regions":"Germany",
      "name":"Katholische Jugendfürsorge der Erzdiözese München und Freising e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kjf-muenchen.de"
   },
   {
      "regions":"Germany",
      "name":"Kinder von Tschernobyl - Stiftung des Landes Niedersachsen",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.tschernobyl.niedersachsen.de"
   },
   {
      "regions":"Germany",
      "name":"Kinder- und Jugendhospizstiftung Balthasar",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.balthasarstiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Kinderheim Kleine Strolche e.V. - Hilfe für traumatisierte Kinder",
      "categories":[
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderheim-kleine-strolche.de"
   },
   {
      "regions":"Germany",
      "name":"kinderherzen - Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"research"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderherzen.de"
   },
   {
      "regions":"Germany",
      "name":"KINDERHILFE - Hilfe für krebs- und schwerkranke Kinder e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderhilfe-ev.de"
   },
   {
      "regions":"Germany",
      "name":"Kinderrechte Afrika e.V. - Zukunft für Kinder in Not",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.kinderrechte-afrika.org"
   },
   {
      "regions":"Germany",
      "name":"Kinderschutzbund Aachen e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderschutzbund-aachen.de"
   },
   {
      "regions":"Germany",
      "name":"Konrad-Adenauer-Stiftung e.V.",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"research"
         },
         {
            "name":"culture"
         }
      ],
      "link":"kas.de"
   },
   {
      "regions":"Germany",
      "name":"Krebsverband Baden-Württemberg e. V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.krebsverband-bw.de"
   },
   {
      "regions":"Germany",
      "name":"Kurt-Hahn-Stiftung c/o Deutsches Stiftungszentrum GmbH",
      "categories":[
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kurt-hahn-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Lebenszentrum Königsborn für Menschen mit Behinderungen",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.lebenszentrum-koenigsborn.de"
   },
   {
      "regions":"Germany",
      "name":"Leonhard gemeinnützige GmbH | Unternehmertum für Gefangene",
      "categories":[
         {
            "name":"alcohol"
         },
         {
            "name":"drugs"
         },
         {
            "name":"poverty"
         },
         {
            "name":"unemployment"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.leonhard.eu"
   },
   {
      "regions":"Germany",
      "name":"Lichtbrücke e. V.",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.lichtbruecke.com"
   },
   {
      "regions":"Germany",
      "name":"MainLichtblick e. V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.mainlichtblick.de"
   },
   {
      "regions":"Germany",
      "name":"Maria im Tann, Zentrum für Kinder-, Jugend- u. Familienhilfe",
      "categories":[
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         }
      ],
      "link":"www.mariaimtann.de"
   },
   {
      "regions":"Germany",
      "name":"Medica mondiale e. V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"youth"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.medicamondiale.org"
   },
   {
      "regions":"Germany",
      "name":"Mercy Ships Deutschland e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"health"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.mercyships.de"
   },
   {
      "regions":"Germany",
      "name":"missio-Internationales Katholisches Missionswerk e.V.",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"religion"
         }
      ],
      "link":"www.missio-hilft.de"
   },
   {
      "regions":"Germany",
      "name":"Mütter- und FamilienZentrum Ingelheim e.V. ( MütZe e.V.)",
      "categories":[
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.muetze-ingelheim.de"
   },
   {
      "regions":"Germany",
      "name":"NABU Naturschutzbund e.V. Bundesgeschäftsstelle",
      "categories":[
         {
            "name":"environment"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.NABU.de"
   },
   {
      "regions":"Germany",
      "name":"Niedersächsische Krebsgesellschaft e.V.",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"research"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.nds-krebsgesellschaft.de"
   },
   {
      "regions":"Germany",
      "name":"Niedersächsische Krebsstiftung",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.nds-krebsstiftung.de"
   },
   {
      "regions":"Germany",
      "name":"Nikolauspflege - Stiftung für blinde und sehbehinderte Menschen",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.nikolauspflege.de"
   },
   {
      "regions":"Germany",
      "name":"PRO RETINA Deutschland e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"disabled"
         },
         {
            "name":"health"
         },
         {
            "name":"kids"
         },
         {
            "name":"research"
         }
      ],
      "link":"www.pro-retina.de"
   },
   {
      "regions":"Germany",
      "name":"Rittergut Kleine Strolche gGmbH - Therapiezentrum für traumatisierte Kinder",
      "categories":[
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.kinderheim-kleine-strolche.de"
   },
   {
      "regions":"Germany",
      "name":"ROTE NASEN Deutschland e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"health"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"culture"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.rotenasen.de"
   },
   {
      "regions":"Germany",
      "name":"Rummelsberger Diakonie e.V.",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"religion"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.rummelsberger-diakonie.de"
   },
   {
      "regions":"Germany",
      "name":"Sächsische Krebsgesellschaft e.V.",
      "categories":[
         {
            "name":"health"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.skg-ev.de"
   },
   {
      "regions":"Germany",
      "name":"SAVE Wildlife Conservation Fund - Stiftung",
      "categories":[
         {
            "name":"developing countries"
         },
         {
            "name":"culture"
         },
         {
            "name":"environment"
         },
         {
            "name":"community"
         },
         {
            "name":"animals"
         }
      ],
      "link":"www.save-wildlife.org"
   },
   {
      "regions":"Germany",
      "name":"SOS-Kinderdorf-Stiftung",
      "categories":[
         {
            "name":"disabled"
         },
         {
            "name":"family"
         },
         {
            "name":"youth"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.sos-kinderdorf-stiftung.de"
   },
   {
      "regions":"Germany",
      "name":"SOS-Kinderdörfer weltweit",
      "categories":[
         {
            "name":"poverty"
         },
         {
            "name":"developing countries"
         },
         {
            "name":"family"
         },
         {
            "name":"kids"
         },
         {
            "name":"community"
         }
      ],
      "link":"www.sos-kinderdoerfer.de"
   },
   {
      "regions":"Greece",
      "name":"SoVD Sozialverband Deutschland, Landesverband NRW",
      "categories":[
         {
            "name":"old age"
         },
         {
            "name":"unemployment"
         },
         {
            "name":"disabled"
         },
         {
            "name":"family"
         },
         {
            "name":"community"
         },
      ],
      "link":"www.sovd-nrw.de"
   }
];