import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateGuestName() {
    if (!guestEntry) return;
    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  const guestNameInput = (
    <div>
      <label className="form-label"> Guest Name</label>
      <div>
        <input
          className="form-input"
          id="guestName"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );

  const displayMessage = user
    ? `Welcome ${user}!`
    : 'Identify yourself stranger';

  return (
    <section>
      <h1 className="display-message">{displayMessage}</h1>
      <form className="guest-form" onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <label className="guest-entry" htmlFor="guestEntry">
          Guest Entry
        </label>
        <textarea
          className="text-area"
          id="guestEntry"
          value={guestEntry}
          placeholder="Write your entry here"
          onChange={(e) => setGuestEntry(e.target.value)}
        />

        <button className="button" type="submit">
          Submit!
        </button>
        {user && (
          <button
            type="button"
            className="signOut"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            Not {user}?
          </button>
        )}
      </form>
    </section>
  );
}
