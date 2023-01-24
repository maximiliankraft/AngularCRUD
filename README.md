# AngularMaterialCRUD

In diesem Repository sollen die vollen Fähigkeiten des Backends ausgeschöpft werden. Beim Request-Assignment wurden nur die bestehenden Patienten gelesen und in einer Liste - ohne Angular Material - angezeigt. 

## Anforderungen an das Frontend

Im Frontend ist bereits eine `package.json` mit Angular Material vorkonfiguriert. Erstelle mittels eines Schematic eine AddressForm und erweitere diese um alle Felder um einen Patient (mit mehreren Namen, Anschriften, etc. ) hinzuzufügen. 

> Befehl zum generieren der Schematic
`ng generate @angular/material:address-form <component-name>`

Zum Anzeigen bestehender Patienten kannst du den Quellcode aus dem AngularRequestAssignment teilweise wiederverwenden. Diese Liste soll als Tabelle angezeigt werden. Dafür gibt es ebenfalls eine Schematic. 

> Befehl zum generieren der Schematic
`ng generate @angular/material:table <component-name>`

Nachdem im Backend folgendes möglich ist (bzw. sein sollte)
- Alle Patienten abfragen
- Patient  mit bestimmter ID abfragen
- Patient hinzufügen
- Patient ändern
- Patient löschen

sind diese Funktionen im Frontend zu implementieren:
- Alle Patienten anzeigen (je Patient ein Bearbeiten & Löschen-Button)
- Detailansicht eines Patienten die ID wird aus der URL ausgelesen



## Anforderungen an das Backend

Damit die Anwendung unabhängig von der lokalen Umgebung (also XAMPP) ausführbar ist, ist die Datenbank in einer von beiden Varianten bereitzustellen:
- Als Docker-Container
- Die H2-Datenbank verwenden (oder eine andere In-Memory Datenbank)

## Abgaberichtlinien
Gib in einem Unterordner deinen Server dazu, mit `mvn spring-boot:run` werde ich diesen dann ausführen um das Frontend zu unterstützen. Achte darauf dass die `.gitignore`-Datei angewandt wird um die Repository-Größe möglichst gering zu halten. 

Das Frontend werde ich mit `ng serve` starten. Auch hier bitte darauf achten dass `node_modules`, `.angular` etc. nicht commited werden. 

### Bewertungsgrundlagen

- Backend ausführbar 10P
- Frontend ausführbar 10P
- Patientenliste wird angezeigt 20P
- Patient kann bearbeitet werden 20P
- Patient kann gelöscht werden 20P
- Einzelner Patient wird angezeigt 20P


### Tutorials zum Nachlesen

> [Routing](https://angular.io/guide/routing-overview)

> [Schematics](https://v7.material.angular.io/guide/schematics)

> [HTTP](https://angular.io/guide/http)