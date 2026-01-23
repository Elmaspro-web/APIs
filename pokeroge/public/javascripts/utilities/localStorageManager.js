"use strict";

export function _addLocalStorage(variable, datos)
{
    return localStorage.setItem(variable, JSON.stringify(datos));
}

export function _loadLocalStorage(variable)
{
    return JSON.parse(localStorage.getItem(variable));
}

export function _removeLocalStorage(variable) {
    localStorage.removeItem(variable);
}