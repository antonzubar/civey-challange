# Test documentation

## Test suite of outlines
1. Successful navigation within the top navbar.
2. Successful registration flow on FE with valid email.
3. Successful registration confirmation.
4. Successful log in with valid email and log out.
5. Successful voting for registered user within any poll card.
6. Successful voting requires additional information for not registered user.
7. Successful interaction with chart attributes (title, legend, hover, article link, data quality, participants).
8. Successful validation that Linear, Range, Distribution, Bar charts are displayed successfully.
9. Successful messaging to company on *For companies* page.
10. Successful search on *How can we help you?* Page.
11. Successful Following using valid email.
12. Successful downloading files from *The most important things to download* section.
13. Successful contacting support within *Couldn’t find your answer* form.
14. Successful open blog post and articles.
15. Successful navigation within footer using links and social media icons.

## Test cases
| ID    | Title                                     | Preconditions                             | Steps                                                                                                                                                                                                                                                                                                                                                               | Expected results                                                                                                                          |
|-------|-------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| CIV-2 | Successful registration with valid email. | User shouldn't be registered at civey.com | 1. Go to civey.com  <br>2. Click *Anmelden* button<br>3. Fill valid email address<br>4. Click the *Weiter* button<br>5. Fill *Lassen Sie Ihre Stimme zählen!* form with valid data<br>6. Click *Jetzt Ergebnisse anzeigen* button<br>7. Open the registration email and click the button to finish the registration<br>8. Go back to civey.com and refresh the page | 6. Confirmation page with proposal to check inbox is displayed.<br>8. Registration is finished and user is logged in                      |
| CIV-6 | Successful voting within any poll card.   | User shouldn't be registered at civey.com | 1. Go to civey.com <br>2. Scroll down to Civey live section<br>3. Click *Jetzt abstimmen* for any poll<br>4. Select any option<br>                                                                                                                      | 3. Vote page is displayed with Poll's options<br>4. *Lassen Sie Ihre Stimme zählen!* form is displayed<br>6. Poll's results are displayed |
|       |                                           |                                           |                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                           |                                                                                                                                      |