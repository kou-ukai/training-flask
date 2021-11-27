# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from simple_item_manager.models.base_model_ import Model
from simple_item_manager import util


class User(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, name=None, serial_no=None):  # noqa: E501
        """User - a model defined in OpenAPI

        :param id: The id of this User.  # noqa: E501
        :type id: int
        :param name: The name of this User.  # noqa: E501
        :type name: str
        :param serial_no: The serial_no of this User.  # noqa: E501
        :type serial_no: str
        """
        self.openapi_types = {
            'id': int,
            'name': str,
            'serial_no': str
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'serial_no': 'serialNo'
        }

        self._id = id
        self._name = name
        self._serial_no = serial_no

    @classmethod
    def from_dict(cls, dikt) -> 'User':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The User of this User.  # noqa: E501
        :rtype: User
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this User.

        ユーザID  # noqa: E501

        :return: The id of this User.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this User.

        ユーザID  # noqa: E501

        :param id: The id of this User.
        :type id: int
        """

        self._id = id

    @property
    def name(self):
        """Gets the name of this User.

        ユーザ名  # noqa: E501

        :return: The name of this User.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this User.

        ユーザ名  # noqa: E501

        :param name: The name of this User.
        :type name: str
        """

        self._name = name

    @property
    def serial_no(self):
        """Gets the serial_no of this User.

        NFCタグのシリアル番号  # noqa: E501

        :return: The serial_no of this User.
        :rtype: str
        """
        return self._serial_no

    @serial_no.setter
    def serial_no(self, serial_no):
        """Sets the serial_no of this User.

        NFCタグのシリアル番号  # noqa: E501

        :param serial_no: The serial_no of this User.
        :type serial_no: str
        """

        self._serial_no = serial_no
