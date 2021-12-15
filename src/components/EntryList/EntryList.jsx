import React from 'react';

import { useEntries } from '../../context/EntryContext';
import Entry from '../Entry/Entry';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <ul className="entry-list">
        {entries.map((entry) => {
          return (
            <li key={`${entry.name} - ${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
