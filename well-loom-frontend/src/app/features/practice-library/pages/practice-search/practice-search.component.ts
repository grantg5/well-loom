import { Component, Output, EventEmitter } from '@angular/core';
import { PracticeSearchBarComponent } from 'features/practice-library/components/practice-search-bar/practice-search-bar.component';
import { PracticesGroupedCardsComponent } from 'features/practice-library/components/practices-grouped-cards/practices-grouped-cards.component';

@Component({
  selector: 'app-practice-search',
  standalone: true,
  imports: [PracticeSearchBarComponent, PracticesGroupedCardsComponent],
  templateUrl: './practice-search.component.html',
  styleUrl: './practice-search.component.css'
})
export class PracticeSearchComponent {
  // Lazy-load practices by calling the get practices service, passing them into practice cards component

  dropdownFilterUpdated(idsSelected: object) {
    // idsSelected = {dropdown: dropdown changed, idsSelected: ids of values selected}

    // Update initially-queried practices list based on updated filters
    // Note: Practices only map to practice groups, so pull based on either selected practice groups,
    // or if none are selected pull from all avaialbe practice groups
  }
}
