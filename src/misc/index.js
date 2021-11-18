export const defaultListEntries = [
    {
        uid: "b7e88e1d-4065-4092-b114-1d0fdfaad672",
        title: "Коробки, 5 шт.",
        description: "Для мукулатуры",
        note: "Из Leroy Merlin, забрать."
    },
    {
        uid: "0e03ae24-5d22-4c4a-a274-33515e6cfe41",
        title: "Пупырка ш. 1,2м д. 12м",
        description: "Влад просил купить для веловипеда",
        note: "Из Leroy Merlin, заказать."
    },
    {
        uid: "5fefcab8-60a8-436c-9803-213a70f0fd8b",
        title: "Тушенка свиная, 7 банок",
        description: "На всякий случай",
        note: "Из Пятерочки, забрать из машины."
    }
]

// Password login related

export const ErrNoUsername = "Необходимо ввести логин";
export const ErrNoPassword = "Необходимо ввести пароль";
export const ErrInvalidCredentials = "Неверный логин или пароль";
export const ValidLogin    = "admin";
export const ValidPassword = "12345";

// ListView related

export const RemoveEntryConfirmation = {
    options: {
        title:           "Подтвердите удаление",
        size:            "md",
        buttonSize:      "md",
        okVariant:       "danger",
        cancelVariant:   "secondary",
        okTitle:         "Да",
        cancelTitle:     "Нет",
        hideHeaderClose: true,
        centered:        true
    },
    message: "Вы уверены, что хотите удалить запись?."
}