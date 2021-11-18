import { v4 as uuidv4 } from 'uuid';
import { defaultListEntries } from '@/misc';

export default {
    namespaced: true,
    state: {
      entries: defaultListEntries
    },
    getters: {
        getEntryByUid: (state) => (uid) => {
            return state.entries
                .findIndex(e => e.uid === uid);
        }
    },
    actions:    {
        saveEntry: (ctx, payload) => {

            if (!payload.uid) {
                ctx.dispatch("addEntry", payload);
                return true;
            }

            if (payload.uid) {
                const entryIdx = ctx.getters.getEntryByUid(payload.uid);

                if (entryIdx === -1) {
                    return false;
                }

                ctx.commit(
                    "setEntryByIdx",
                    {
                        idx:   entryIdx,
                        entry: payload
                    }
                )

                return true;
            }
        },
        addEntry:   (ctx, payload) => {

            const {title, description, note} = payload;
            const uid = uuidv4();

            ctx.commit("addEntry", {
                uid:         uid,
                title:       title,
                description: description,
                note:        note
            });

        },
        removeEntry: (ctx, uid) => {
            const entryToRemoveIdx = ctx.getters.getEntryByUid(uid);

            if (entryToRemoveIdx !== -1) {
                ctx.commit("removeEntry", entryToRemoveIdx);
            }
        },
    },
    mutations: {
        addEntry: (state, entry) => {
            state.entries.push(entry);
        },
        removeEntry: (state, idxToRemove) => {
            state.entries.splice(idxToRemove, 1);
        },
        setEntries: (state, entries) => {
            state.entries = entries;
        },
        setEntryByIdx: (state, {idx, entry}) => {
            state.entries.splice(idx, 1, entry);
        }
    }
}
